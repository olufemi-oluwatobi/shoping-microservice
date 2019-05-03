/**
 * @swagger
 * definitions:
 *   Transaction:
 *     type: object
 *     required:
 *       - walletId
 *       - productId
 *     properties:
 *       productId:
 *         type: string
 *       walletId:
 *         type: string
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 *   Transactions:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Transaction'
 */

module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "transactions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      walletId: {
        type: DataTypes.STRING
      },
      productId: {
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
  Transactions.createTransaction = (params, model) =>
    Transactions.create(params).then(transaction =>
      Transactions.fetchTransaction(transaction.id, model)
    );
  Transactions.fetchTransaction = id =>
    Transactions.findOne({
      where: { id }
    });
  Transactions.fetchTransactions = () => Transactions.findAll();
  Transactions.fetchLastTransactions = limit =>
    Transactions.findAll({
      limit,
      order: [["createdAt", "DESC"]]
    }).then(transactions => transactions);

  Transactions.associate = models => {
    Transactions.belongsTo(models.wallets);
    Transactions.belongsTo(models.products);
  };
  return Transactions;
};
