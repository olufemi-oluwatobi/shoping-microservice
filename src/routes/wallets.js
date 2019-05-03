import express from "express";
import { WalletController } from "../controller";

const walletRouter = express.Router();

walletRouter.post("/", WalletController.create);
walletRouter.get("/:id/check_balance", WalletController.checkBalance);
walletRouter.put("/:id/fund_wallet", WalletController.fundWallet);
walletRouter.put("/:id/charge_wallet", WalletController.chargeWallet);

export default walletRouter;
