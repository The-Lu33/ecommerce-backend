import { Op } from "sequelize";
import { product } from "../models/index.js";


export class productService {
  static async create(newProduct) {
    try {
      const result = await product.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async all() {
    try {
      const result = await product.findAll({
        where: {
          qty_available: {
            [Op.gt]: 0,
          },
        },
      });
      return result;
      // return result.filter((product) => product.qty_available >= 1);
    } catch (error) {
      throw error;
    }
  }
}
