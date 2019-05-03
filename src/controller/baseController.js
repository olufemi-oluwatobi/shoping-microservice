export default class BaseController {
  static errorResponse(err, res) {
    let errorMessage;
    if (!err.name) {
      errorMessage = err.message;
    } else if (err.name.toLowerCase().includes("sequelize")) {
      errorMessage = err.parent ? err.parent.sqlMessage : err.toString();
    } else if (err.name.toLowerCase().includes("swagger")) {
      errorMessage = err.message;
    } else {
      errorMessage = err.mapped
        ? Object.values(err.mapped())
        : `an error occurred ${err}`;
    }

    res
      .status(503)
      .json(Object.assign({}, { success: false }, { error: errorMessage }));
  }
}
