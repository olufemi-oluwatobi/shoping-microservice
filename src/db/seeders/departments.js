const faker = require("faker");

const getGender = number => {
  return number % 2 == 0 ? "female" : "male";
};
const getMiddleNameInitial = name => {
  const nameArray = [...name];
  return nameArray[0];
};
const seedData = employee => {
  const items = [];
  for (let i = 1; i < 11; i++) {
    const newItem = {
      department_id: i,
      name: `${faker.commerce.department()}`,
      manager_id: i
    };
    items.push(newItem);
  }
  return items;
};
console.log(seedData());

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employee = await queryInterface.sequelize.query(
      "SELECT manager_id from Employees;"
    );
    console.log("employee", employee);
    return queryInterface.bulkInsert(
      "Departments",
      await seedData(employee[0]),
      {
        returning: true
      }
    );
  },

  down: async queryInterface =>
    queryInterface.bulkDelete("Departments", null, {})
};
