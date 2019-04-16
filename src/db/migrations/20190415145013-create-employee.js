"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Employees", {
      employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_initial: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      home_phone: {
        type: Sequelize.STRING
      },
      office_phone: {
        type: Sequelize.STRING
      },
      office_location: {
        type: Sequelize.STRING
      },
      manager_id: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      vacation_hours: {
        type: Sequelize.STRING
      },
      sick_leave_hours: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: Date.now()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Employees");
  }
};
