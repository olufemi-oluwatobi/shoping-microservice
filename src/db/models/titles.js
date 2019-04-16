"use strict";
module.exports = (sequelize, DataTypes) => {
  const Titles = sequelize.define(
    "Titles",
    {
      title_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      level: {
        type: DataTypes.STRING
      },

      Job_description: {
        type: DataTypes.STRING
      },
      low_pay: {
        type: DataTypes.STRING
      },
      high_pay: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.STRING
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {}
  );
  Titles.associate = models => {};
  return Titles;
};
