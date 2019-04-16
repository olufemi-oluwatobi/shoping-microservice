const faker = require("faker");

const seedData = () => {
  const items = [];
  for (let i = 1; i < 7; i++) {
    const newItem = {
      title_id: i,
      title: `${faker.name.jobTitle()}`,
      level: `${i + 1}`,
      job_description: `${faker.name.jobDescriptor()}`,
      low_pay: `${faker.finance.amount()}`,
      high_pay: `${i}0${faker.finance.amount()}` //`${i}${faker.finance.amount()}`
    };
    items.push(newItem);
  }
  return items;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Titles", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface => queryInterface.bulkDelete("Titles", null, {})
};
