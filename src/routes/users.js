import express from "express";
import { UserController } from "../controller";

const userRouter = express.Router();

userRouter.get("/", UserController.index);
userRouter.get("/:id", UserController.show);
userRouter.post("/", UserController.create);

export default userRouter;
