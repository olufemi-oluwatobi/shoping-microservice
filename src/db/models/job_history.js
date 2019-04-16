"use strict";
module.exports = (sequelize, DataTypes) => {
  const Job_History = sequelize.define(
    "Job_History",
    {
      title_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      department_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },

      date: {
        type: DataTypes.STRING
      },
      pay: {
        type: DataTypes.STRING
      },
      employee_id: {
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
  Job_History.associate = models => {
    Job_History.belongsTo(models.Employees);
    Job_History.belongsTo(models.Titles);
    Job_History.belongsTo(models.Departments);
  };
  return Job_History;
};
