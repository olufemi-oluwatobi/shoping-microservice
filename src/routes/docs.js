import express from "express";
import { swaggerSpec, swaggerUI } from "../swagger";

const docsRouter = express.Router();

export const getJson = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
};

docsRouter.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default docsRouter;
