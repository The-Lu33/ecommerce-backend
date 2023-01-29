import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import carRouter from "./routes/car.routes.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// init models
// authentica db
db.authenticate()
  .then(() => console.log("Base de datos autenticada"))
  .catch((error) => console.log(error));

// db.sync()
//   .then(() => console.log("base de datos sync"))
//   .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "welcome to server" });
});

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/car", carRouter);



export default app;
