const faker = require("faker");

const getGender = number => {
  return number % 2 == 0 ? "female" : "male";
};
const getMiddleNameInitial = name => {
  const nameArray = [...name];
  return nameArray[0];
};
const seedData = () => {
  const items = [];
  for (let i = 1; i < 6; i++) {
    const newItem = {
      employee_id: i,
      last_name: `${faker.name.lastName()}`,
      first_name: `${faker.name.firstName()}`,
      middle_initial: getMiddleNameInitial(`${faker.name.firstName()}`),
      sex: getGender(i),
      address: `${faker.address.streetAddress()}`,
      city: `${faker.address.city()}`,
      region: `${faker.address.county()}`,
      postal_code: `${faker.address.countryCode()}`,
      home_phone: `${faker.phone.phoneNumber()}`,
      office_phone: `${faker.phone.phoneNumber()}`,
      office_location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`,
      manager_id: i,
      vacation_hours: `${i}00`,
      sick_leave_hours: `${i}00`
    };
    items.push(newItem);
  }
  return items;
};
console.log(seedData());

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Employees", await seedData(), {
      returning: true
    });
  },

  down: async queryInterface => queryInterface.bulkDelete("Employees", null, {})
};
