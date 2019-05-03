import express from "express";
import http from "http";
import routes from "./src/routes/index";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.set("json spaces", 4);
const port = 2000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
app.listen(port, () => {
  console.log(`you are running on port ${port}`);
});
