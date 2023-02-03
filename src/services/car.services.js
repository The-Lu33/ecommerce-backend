import {
  car,
  order,
  product,
  product_in_cart,
  product_in_order,
} from "../models/index.js";

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
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async productsCar(id) {
    try {
      const carProduct = await car.findOne({
        where: {
          userId: id,
        },
        include: {
          model: product_in_cart,
          as: "product_in_carts",
        },
      });

      const totalPricesCar = carProduct.product_in_carts
        .map((product) => Number(product.price))
        .reduce((a, b) => a + b, 0);
      carProduct.total_price = totalPricesCar;
      return carProduct;
    } catch (error) {
      throw error;
    }
  }
  static async clearCar(id) {
    try {
      await car.update({ total_price: 0 }, { where: { userId: id } });
    } catch (error) {
      throw error;
    }
  }
  static async purchaseProduct(userID) {
    try {
      const car = await this.productsCar(userID);
      if (car.total_price === "0") {
        return 'no hay productos'
      } else{

        const dataOrder = {
          user_id: car.userId,
          total_price: car.total_price,
        };
      const newOrder = await order.create(dataOrder);
      const productInCar = car.product_in_carts;
      // console.log(product_in_carts);
      productInCar.forEach(async (products) => {
        const data = {};
        data.order_id = newOrder.id;
        data.product_id = products.product_id;
        data.quatity = products.quatity;
        data.price = products.price;
        await product_in_order.create(data);
      });
      await product_in_cart.destroy({
        where: {
          cart_id: car.id,
        },
      });
      await this.clearCar(userID);
      return newOrder;
    }
    } catch (error) {
      throw error;
    }
  }
}
