"use strict";
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define(
    "Departments",
    {
      department_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: DataTypes.STRING
      },
      manager_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
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
  Departments.associate = models => {};
  return Departments;
};
