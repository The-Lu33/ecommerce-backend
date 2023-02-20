import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  apis: [
    "./src/routes/auth.routes.js",
    "./src/models/users.js",
    "./src/routes/product.routes.js",
    "./src/models/product.js",
    "./src/routes/car.routes.js",
    "./src/models/car.js",
    "./src/routes/order.routes.js",
    "./src/models/order.js"
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce Backend",
      version: "1.0.0",
      description: "API para un ecommers",
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app, port) => {
  // creamos la ruta para nuestra documentación
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Hacemos la documentación en formato JSON
  app.get("api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "application/json" }),
      res.send(swaggerSpec);
  });
  // mostramos un mensaje en consola para saber que la documentación
  // esta lista
  console.log(`Doc V1 disponible en http://localhost:${port}/api/v1/docs`);
};
