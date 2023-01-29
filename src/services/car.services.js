import { car, product, product_in_cart } from "../models/index.js";

export class carService {
  static async create(userId) {
    try {
      const result = await car.create({ userId });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(productForCar) {
    try {
      const { cart_id, product_id, quatity } = productForCar;

      const productData = await product.findOne({
        where: {
          id: product_id,
        },
      });
      const price = productData.price * quatity;
      const result = await product_in_cart.create({
        cart_id,
        product_id,
        quatity,
        price,
        status: productData.status,
      });
      console.log(result.dataValues);
    } catch (error) {
      throw error;
    }
  }
}
