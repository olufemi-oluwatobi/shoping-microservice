const { Employees } = require("../db/models");

console.log(Employees);
class EmployeeController {
  static async index(req, res) {
    try {
      const getEmployees = () => Employees.getAll();
      const employee = await getEmployees();
      if (!employee) {
        res.status(401).json({
          success: false,
          data: "there are no employees"
        });
      }
      res.status(200).json({
        success: true,
        data: employee
      });
    } catch {
      error => console.log(error);
    }
  }
  static async show(req, res) {
    try {
      const getEmployee = employeeId => Employees.fetchEmployee(employeeId);
      const employee = await getEmployee(req.params.id);
      if (!employee) {
        res.status(401).json({
          success: false,
          data: "this employee doesnt exist"
        });
      }
      res.status(200).json({
        success: true,
        data: employee
      });
    } catch {
      error => console.log(error);
    }
  }
  static async create(req, res) {
    try {
      const getEmployee = employeeId => Employees.fetchEmployee(employeeId);
      const findEmployer = await getEmployee(req.body.employee_id);
      if (findEmployer) {
        res.status(403).json({
          success: false,
          data: "this employee already exists"
        });
      }
      const createEmployee = employeeData =>
        Employees.createEmployee(employeeData);
      const employee = await createEmployee(req.body);

      if (!employee) {
        res.status(422).json({
          success: false,
          data: "employee wasn't created"
        });
      }
      res.status(202).json({
        success: true,
        data: employee
      });
    } catch {
      error => console.log(error);
    }
  }
}
export default EmployeeController;
