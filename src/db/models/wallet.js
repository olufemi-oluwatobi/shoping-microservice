/**
 * @swagger
 * definitions:
 *   Wallet:
 *     type: object
 *     required:
 *       - cardNumber
 *       - username
 *     properties:
 *       walletId:
 *         type: integer
 *       cardNumber:
 *         type: string
 *       username:
 *         type: string
 *   FundWallet:
 *     type: object
 *     required:
 *       - cardNumber
 *       - amount
 *       - walletId
 *     properties:
 *       walletId:
 *         type: integer
 *       cardNumber:
 *         type: string
 *       amount:
 *         type: integer
 *   ChargeWallet:
 *     type: object
 *     required:
 *       - cardNumber
 *       - productId
 *       - walletId
 *     properties:
 *       product:
 *         type: integer
 *       cardNumber:
 *         type: string
 *       walletId:
 *         type: integer
 *   Wallets:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Wallet'
 */

module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define(
    "wallets",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      userId: {
        type: DataTypes.INTEGER
      },
      cardNumber: {
        type: DataTypes.STRING
      },
      balance: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: Date.now()
      }
    },
    {}
  );
  Wallet.fetchWallet = (id, models) =>
    Wallet.findOne({
      where: { id },
      include: [
        {
          model: models.transactions,
          as: "transaction",
          attributes: ["id", "productId", "name"]
        }
      ]
    });
  Wallet.updateWallet = (id, data, models) =>
    Wallet.update(data, {
      where: { id }
    }).then(() => Wallet.fetchWallet(id, models));
  Wallet.associate = models => {
    Wallet.hasOne(models.transactions);
  };
  return Wallet;
};
