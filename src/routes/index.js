import employeeRoute from "./employee";
module.exports = app => {
  app.get("/", (req, res) => {
    res.json({
      success: true,
      response: "landing page"
    });
  });
  app.use("/employee", employeeRoute);
};
