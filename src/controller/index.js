import UserController from "./user";
import ProductController from "./products";
import WalletController from "./wallet";
import TransactionsController from "./transactions";

/**
 * @swagger
 * definitions:
 *   ErrorResponse:
 *     type: object
 *     properties:
 *       success:
 *         type: boolean
 *         default: false
 *       message:
 *         type: string
 */
export {
  UserController,
  ProductController,
  TransactionsController,
  WalletController
};
