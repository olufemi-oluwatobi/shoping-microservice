import express from "express";
import { ProductController } from "../controller";

const productRouter = express.Router();

productRouter.get("/", ProductController.index);
productRouter.get("/:id", ProductController.show);
productRouter.post("/", ProductController.create);

export default productRouter;
