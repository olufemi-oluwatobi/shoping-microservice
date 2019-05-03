const { products: Products } = require("../db/models");
const models = require("../db/models");
import BaseController from "./baseController";

class ProductController extends BaseController {
  /**
   * @swagger
   * /products:
   *   get:
   *     description: Retrieve the full list of products
   *     tags:
   *       - products
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch products success
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
   *             $ref: '#/definitions/products'
   *       50x:
   *         description: List product error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: List product error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async index(req, res) {
    try {
      const findProducts = () => Products.getProducts();
      const products = await findProducts();
      if (!products) {
        res.status(401).json({
          success: false,
          data: "there are no products"
        });
      }
      res.status(200).json({
        success: true,
        data: products
      });
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }

  /**
   * @swagger
   * /products/{productId}:
   *   get:
   *     description: Retrieve an specific product
   *     tags:
   *       - products
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: productId
   *         description: id of the product to retrieve
   *         required: true
   *         type: string
   *         format: id
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch product success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/Product'
   *       50x:
   *         description:  Error response
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: Error response
   *         schema:
   *         $ref: '#/definitions/ErrorResponse'
   */
  static async show(req, res) {
    try {
      const getProduct = productId => Products.fetchProduct(productId);
      const products = await getProduct(req.params.id, models);
      if (!products) {
        res.status(401).json({
          success: false,
          data: "this products doesn't exist"
        });
      }
      res.status(200).json({
        success: true,
        data: products
      });
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }
  /**
   * @swagger
   * /products:
   *   post:
   *     description: Create a new product
   *     tags:
   *       - products
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: product
   *         description: product object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Product'
   *     responses:
   *       200:
   *         type: object
   *         description: update product success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/Product'
   *       50x:
   *         description: create product error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: create product error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async create(req, res) {
    try {
      const createProduct = params => Products.addProduct(params);
      console.log(req.body);
      const products = await createProduct(req.body);
      if (!products) {
        res.status(401).json({
          success: false,
          data: "failed to create products"
        });
      }
      res.status(200).json({
        success: true,
        data: products
      });
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }
}
export default ProductController;
