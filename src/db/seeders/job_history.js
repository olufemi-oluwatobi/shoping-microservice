const faker = require("faker");

const seedData = () => {
  const items = [];
  for (let i = 1; i <= 15; i++) {
    const newItem = {
      department_id: i,
      date: `${faker.date.past()}`,
      employee_id: i > 5 ? i % 5 : i % 5 == 0 ? i + 1 : i,
      title_id: i > 7 ? i % 7 : 1 % 7 == 0 ? i + 1 : i,
      pay: `${faker.finance.amount()}`
    };
    items.push(newItem);
  }
  return items;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Job_History", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface =>
    queryInterface.bulkDelete("Job_History", null, {})
};
