import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerModelValidator from "swagger-model-validator";
import classes from "./classes";

const options = {
  swaggerDefinition: {
    info: {
      title: "Shopping API Documentation",
      version: "1.0.0",
      description: "Swagger Documentation for Shoping"
    },
    tags: [
      {
        name: "shopping",
        description: "shopping API"
      }
    ],
    schemes: ["http", "https"],
    host: "localhost:2000",
    basePath: "/"
  },
  apis: classes
};

const swaggerSpec = swaggerJSDoc(options);
swaggerModelValidator(swaggerSpec);

class SwaggerException {
  constructor(message) {
    this.message = message;
    this.name = "SwaggerException";
  }
}

function validateModel(name, model) {
  const responseValidation = swaggerSpec.validateModel(
    name,
    model,
    false,
    true
  );

  if (!responseValidation.valid) {
    throw new SwaggerException(responseValidation.GetErrorMessages());
  }
}

export { swaggerSpec, swaggerUI, validateModel };
