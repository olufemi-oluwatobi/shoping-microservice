const {
  users: Users,
  wallets: Wallets,
  transactions: Transactions,
  products: Product
} = require("../db/models");
const models = require("../db/models");
import BaseController from "./baseController";

class WalletController extends BaseController {
  /**
   * @swagger
   * /wallets:
   *   post:
   *     description: Create a new user Wallet
   *     tags:
   *       - wallets
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: wallet
   *         description: wallet object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Wallet'
   *     responses:
   *       200:
   *         type: object
   *         description: update wallet success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/Wallet'
   *       50x:
   *         description: create wallet error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: create wallet error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async create(req, res) {
    try {
      Users.findOne({
        where: {
          username: req.body.username
        }
      }).then(user => {
        if (!user) {
          res.status(404).json({
            success: false,
            data: "you need to be a user before you create a wallet"
          });
        } else {
          Wallets.findOne({
            where: { userId: user.id }
          }).then(wallet => {
            if (wallet) {
              res
                .status(403)
                .json({ success: false, data: "you already have a wallet" });
            } else {
              delete req.body.username;
              const requestData = {
                userId: user.id,
                balance: 0.0,
                cardNumber: req.body.cardNumber
              };
              Wallets.create(requestData).then(wallet => {
                if (wallet) {
                  res.status(200).json({
                    success: true,
                    data: wallet
                  });
                } else {
                  res.status(401).json({
                    success: false,
                    data: "failed to create wallet"
                  });
                }
              });
            }
          });
        }
      });
    } catch (error) {
      WalletController.errorResponse(error, res);
    }
  }
  static async checkBalance(req, res) {
    try {
      const getProduct = walletId => Wallets.fetchWallet(walletId);
      const wallet = await getProduct(req.params.id);
      if (!wallet) {
        res.status(401).json({
          success: false,
          data: "this wallet doesn't exist"
        });
      }
      res.status(200).json({
        success: true,
        data: wallet.balance
      });
    } catch (error) {
      WalletController.errorResponse(error, res);
    }
  }
  /**
   * @swagger
   * /wallets/{walletId}/fund_wallet:
   *   put:
   *     description: Update a wallet's feature
   *     tags:
   *       - wallets
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: walletId
   *         description: id of the wallet
   *         required: true
   *         type: string
   *         in: path
   *       - name: cardNumber
   *         description: card number for funding wallet
   *       - name: amount
   *         description: amount to be funded
   *         schema:
   *            $ref: '#/definitions/FundWallet'
   *         in: body
   *     responses:
   *       200:
   *         type: object
   *         description: wallet has been funded
   *         required:
   *          - success
   *          - data
   *         properties:
   *          success:
   *            type: boolean
   *          data:
   *            type: array
   *            items:
   *              $ref: '#/definitions/Wallet'
   *       50x:
   *         description: wallet couldnt be funded
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: error while funding wallet
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async fundWallet(req, res) {
    try {
      let balance = 0;
      if (req.body.cardNumber) {
        Wallets.findOne({ where: { id: req.params.id } }).then(wallet => {
          if (!wallet) {
            res.status(404).json({
              success: false,
              data: "this wallet doesn't exist"
            });
          }
          balance = req.body.amount + wallet.balance;
          Wallets.update({ balance }, { where: { id: wallet.id } })
            .then(() => Wallets.findOne({ where: { id: wallet.id } }))
            .then(wallet =>
              res.status(200).json({
                success: true,
                data: wallet.balance
              })
            );
        });
      } else {
        res.status(403).json({
          success: false,
          data: "please input card number"
        });
      }
    } catch (error) {
      WalletController.errorResponse(error, res);
    }
  }

  /**
   * @swagger
   * /wallets/{walletId}charge_wallet:
   *   put:
   *     description: buy product feature
   *     tags:
   *       - wallets
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: walletId
   *         description: id of the wallet
   *         required: true
   *         type: string
   *         in: path
   *       - name: cardNumber
   *         description: card number for funding wallet
   *       - name: amount
   *         description: amount to be funded
   *         schema:
   *            $ref: '#/definitions/ChargeWallet'
   *         in: body
   *     responses:
   *       200:
   *         type: object
   *         description: wallet has been funded
   *         required:
   *          - success
   *          - data
   *         properties:
   *          success:
   *            type: boolean
   *          data:
   *            type: array
   *            items:
   *              $ref: '#/definitions/Wallet'
   *       50x:
   *         description: wallet couldnt be funded
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: error while funding wallet
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async chargeWallet(req, res) {
    try {
      let balance = 0;
      if (req.body.cardNumber) {
        const fetchProduct = id => Product.fetchProduct(id);
        const product = await fetchProduct(req.body.productId);
        if (product) {
          const fetchWallet = (id, model) => Wallets.fetchWallet(id, model);
          const wallet = await fetchWallet(req.params.id, models);
          if (wallet) {
            balance = wallet.balance - product.price;
            if (balance < 0) {
              res.status(404).json({
                success: false,
                data: "insufficient funds"
              });
            }
            const updateWallet = (id, data, model) =>
              Wallets.updateWallet(id, data, model);
            const updatedWallet = await updateWallet(
              wallet.id,
              { balance },
              models
            );
            if (!updatedWallet) {
              res.status(403).json({
                success: false,
                data: "transaction failed"
              });
            }
            const createTransaction = params =>
              Transactions.createTransaction(params);
            await createTransaction(
              {
                name: `${product.name} purchase`,
                productId: product.id,
                walletId: wallet.id
              },
              models
            );
            res.status(200).json({
              success: true,
              data: updatedWallet
            });
          }
          res.status(404).json({
            success: false,
            data: "this wallet doesn't exist"
          });
        }
      } else {
        res.status(403).json({
          success: false,
          data: "please input card number"
        });
      }
    } catch (error) {
      WalletController.errorResponse(error, res);
    }
  }
}
export default WalletController;
