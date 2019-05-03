import express from "express";
import { TransactionsController } from "../controller";

const transactionsRouter = express.Router();

transactionsRouter.get(
  "/get_recent_transactions",
  TransactionsController.fetchLastTransactions
);
transactionsRouter.get("/", TransactionsController.index);

export default transactionsRouter;
