const faker = require("faker");

const seedData = () => {
  const items = [];
  for (let i = 1; i < 6; i++) {
    const newItem = {
      id: i,
      lastname: `${faker.name.lastName()}`,
      firstname: `${faker.name.firstName()}`,
      username: `${faker.name.firstName()}`
    };
    items.push(newItem);
  }
  return items;
};
console.log(seedData());

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface => queryInterface.bulkDelete("Employees", null, {})
};
