"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("transactions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING
      },
      walletId: {
        type: Sequelize.INTEGER,
        refrences: { models: "wallets", key: "id" }
      },
      productId: {
        type: Sequelize.INTEGER,
        refrences: { models: "products", key: "id" }
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
    return queryInterface.dropTable("transactions");
  }
};
