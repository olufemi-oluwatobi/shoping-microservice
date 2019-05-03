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
      id: i,
      description: `product ${i}`,
      imageUrl: "image url",
      price: 5000
    };
    items.push(newItem);
  }
  return items;
};
console.log(seedData());

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface => queryInterface.bulkDelete("products", null, {})
};
