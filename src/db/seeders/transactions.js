const faker = require("faker");

const seedData = () => {
  const items = [];
  for (let i = 1; i <= 15; i++) {
    const newItem = {
      id: i,
      walletId: i,
      productId: i
    };
    items.push(newItem);
  }
  return items;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("transactions", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface =>
    queryInterface.bulkDelete("transactions", null, {})
};
