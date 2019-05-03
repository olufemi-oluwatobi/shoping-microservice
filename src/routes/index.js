import userRouter from "./users";
import productRouter from "./products";
import docsRouter, * as docsRouterMethods from "./docs";
import walletRouter from "./wallets";
import transactionsRouter from "./transactions";

module.exports = app => {
  app.get("/", (req, res) => {
    res.json({
      success: true,
      version: "1.0.0",
      response: "Shopping micro-service"
    });
  });
  app.use("/users", userRouter);
  app.use("/products", productRouter);
  app.use("/docs/core", docsRouter);
  app.use("/wallets", walletRouter);
  app.use("/docs/core.json", docsRouterMethods.getJson);
  app.use("/transactions", transactionsRouter);
};
