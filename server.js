import express from "express";
import http from "http";
import routes from "./src/routes/index";

const app = express();
routes(app);
app.use(express.json());
app.set("json spaces", 4);
const port = 2000;
app.listen(port, () => {
  console.log(`you are running on port ${port}`);
});
