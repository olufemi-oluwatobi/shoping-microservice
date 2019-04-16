"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define(
    "Employees",
    {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING
      },
      first_name: {
        type: DataTypes.STRING
      },

      middle_initial: {
        type: DataTypes.STRING
      },
      sex: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      region: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.STRING
      },
      home_phone: {
        type: DataTypes.STRING
      },
      office_phone: {
        type: DataTypes.STRING
      },
      office_location: {
        type: DataTypes.STRING
      },
      manager_id: {
        type: DataTypes.STRING
      },
      vacation_hours: {
        type: DataTypes.STRING
      },
      sick_leave_hours: {
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
  Employees.getAll = () => {
    return Employees.findAll().then(employees => employees);
  };
  Employees.fetchEmployee = employeeId =>
    Employees.findOne({
      where: { employee_id: employeeId }
    }).then(employee => employee);
  Employees.createEmployee = data => {
    Employees.create({
      data
    }).then(employee => employee);
  };
  Employees.associate = function(models) {
    Employees.hasMany(models.Job_History);
  };
  return Employees;
};
