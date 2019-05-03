const uuid = require("uuid/v4");

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - firstname
 *       - lastname
 *       - username
 *     properties:
 *       id:
 *         type: integer
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       username:
 *         type: string
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 *   Users:
 *     type: array
 *     items:
 *       $ref: '#/definitions/User'
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      firstname: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
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
  User.getUsers = () => User.findAll();
  User.fetchUser = (id, models) =>
    User.findOne({
      where: { id },
      include: [
        {
          model: models.wallets,
          as: "wallet",
          attributes: ["id", "cardNumber", "balance"]
        }
      ]
    });
  User.addUser = params => User.create(params).then(user => user);
  User.associate = models => {
    User.hasOne(models.wallets);
  };
  return User;
};
