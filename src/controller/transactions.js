const { transactions: Transactions } = require("../db/models");
const models = require("../db/models");
import BaseController from "./baseController";

class TransactionsController extends BaseController {
  /**
   * @swagger
   * /transactions:
   *   get:
   *     description: Retrieve the full list of transactions
   *     tags:
   *       - transactions
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch transactions success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Transactions'
   *       50x:
   *         description: List transactions error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: List transactions error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async index(req, res) {
    try {
      const findTransactions = () => Transactions.getTransactionss();
      const transactions = await findTransactions();
      if (!transactions) {
        res.status(401).json({
          success: false,
          data: "there are no transactions"
        });
      }
      res.status(200).json({
        success: true,
        data: transactions
      });
    } catch (error) {
      TransactionsController.errorResponse(error, res);
    }
  }
  /**
   * @swagger
   * /transactions/get_recent_transactions:
   *   get:
   *     description: Retrieve an recent transactions
   *     tags:
   *       - transactions
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: transactions
   *         description: object of the transactions to retrieve
   *         required: true
   *         type: string
   *         format: id
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch transactions success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/Transaction'
   *       50x:
   *         description:  Error response
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: Error response
   *         schema:
   *         $ref: '#/definitions/ErrorResponse'
   */
  static async fetchLastTransactions(req, res) {
    try {
      const getTransactions = limit =>
        Transactions.fetchLastTransactions(limit);
      const limit = parseInt(req.query.limit, 10);
      const transactions = await getTransactions(limit);

      if (!transactions) {
        res.status(401).json({
          success: false,
          data: "this wallet has not funded an transaction"
        });
      }
      res.status(200).json({
        success: true,
        data: transactions
      });
    } catch (error) {
      TransactionsController.errorResponse(error, res);
    }
  }
}
export default TransactionsController;
