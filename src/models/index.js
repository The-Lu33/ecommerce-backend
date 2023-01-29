import db from "../utils/db.js";
import initModels from "./init-models.js";

const models = initModels(db);

export const { car, order, product, product_in_cart, product_in_order, users } =
  models;
// export default models;
