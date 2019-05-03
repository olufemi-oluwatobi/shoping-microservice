const { users: Users } = require("../db/models");
const models = require("../db/models");
import BaseController from "./baseController";

class UserController extends BaseController {
  /**
   * @swagger
   * /users:
   *   get:
   *     description: Retrieve the full list of users
   *     tags:
   *       - users
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch users success
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
   *             $ref: '#/definitions/Users'
   *       50x:
   *         description: List users error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: List users error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async index(req, res) {
    try {
      const findUsers = () => Users.getUsers();
      const users = await findUsers();
      if (!users) {
        res.status(401).json({
          success: false,
          data: "there are no users"
        });
      }
      res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      UserController.errorResponse(error, res);
    }
  }
  /**
   * @swagger
   * /users/{userId}:
   *   get:
   *     description: Retrieve an specific user
   *     tags:
   *       - users
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: path
   *         name: userId
   *         description: id of the user to retrieve
   *         required: true
   *         type: string
   *         format: id
   *     responses:
   *       200:
   *         type: object
   *         description: Fetch user success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/User'
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
      const getUser = (userId, model) => Users.fetchUser(userId, model);
      const user = await getUser(req.params.id, models);
      if (!user) {
        res.status(401).json({
          success: false,
          data: "this user doesn't exist"
        });
      }
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      UserController.errorResponse(error, res);
    }
  }

  /**
   * @swagger
   * /users:
   *   post:
   *     description: Create a new user
   *     tags:
   *       - users
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: user object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/User'
   *     responses:
   *       200:
   *         type: object
   *         description: update user success
   *         required:
   *           -success
   *           -data
   *         properties:
   *          success:
   *            type: boolean
   *            default: true
   *          data:
   *           $ref: '#/definitions/User'
   *       50x:
   *         description: create user error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   *       400:
   *         description: create user error
   *         schema:
   *           $ref: '#/definitions/ErrorResponse'
   */
  static async create(req, res) {
    try {
      Users.findOne({ where: { username: req.body.username } }).then(
        async user => {
          if (user) {
            res.status(401).json({
              success: false,
              data: "this username has been taking"
            });
          }
          const createUser = params => Users.addUser(params);
          const newUser = await createUser(req.body);
          if (!newUser) {
            res.status(401).json({
              success: false,
              data: "failed to create user"
            });
          }
          res.status(200).json({
            success: true,
            data: newUser
          });
        }
      );
    } catch (error) {
      UserController.errorResponse(error, res);
    }
  }
}
export default UserController;
