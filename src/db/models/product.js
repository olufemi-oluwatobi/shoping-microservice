/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required:
 *       - description
 *       - imageUrl
 *     properties:
 *       description:
 *         type: string
 *       imageUrl:
 *         type: string
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 *   Products:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Product'
 */

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING
      },

      price: {
        type: DataTypes.INTEGER
      },
      imageUrl: {
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

  Product.getProducts = () => Product.findAll();
  Product.fetchProduct = id =>
    Product.findOne({
      where: { id }
    });
  Product.addProduct = params =>
    Product.create(params).then(product => product);
  Product.associate = models => {};
  return Product;
};
