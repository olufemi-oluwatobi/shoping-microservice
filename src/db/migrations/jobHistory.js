"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Job_History", {
      title_id: {
        type: Sequelize.INTEGER,
        refrences: { models: "Titles", key: "title_id" }
      },
      department_id: {
        type: Sequelize.INTEGER,
        refrences: { models: "Departments", key: "department_id" }
      },

      date: {
        type: Sequelize.STRING
      },
      pay: {
        type: Sequelize.STRING
      },
      employee_id: {
        type: Sequelize.INTEGER,
        refrences: { models: "Employees", key: "employee_id" }
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
