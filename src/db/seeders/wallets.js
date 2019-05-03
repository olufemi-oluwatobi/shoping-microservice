const faker = require("faker");

const seedData = () => {
  const items = [];
  for (let i = 1; i < 7; i++) {
    const newItem = {
      id: i,
      userId: i,
      cardNumber: "230040000505006",
      balance: 2000
    };
    items.push(newItem);
  }
  return items;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("wallets", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface => queryInterface.bulkDelete("wallets", null, {})
};
