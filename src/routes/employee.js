import express from "express";
import { EmployeeController } from "../controller";

const employeeRoute = express.Router();

employeeRoute.get("/", EmployeeController.index);
employeeRoute.get("/:id", EmployeeController.show);
employeeRoute.post("/create", EmployeeController.create);

export default employeeRoute;
