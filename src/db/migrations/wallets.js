"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("wallets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        refrences: { models: "users", key: "id" },
        allowNull: false
      },

      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0.0
      },
      cardNumber: { type: Sequelize.STRING },
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
    return queryInterface.dropTable("wallets");
  }
};
