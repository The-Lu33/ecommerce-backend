import { order } from "../models/index.js";

export class orderServices {
  static async getAllOrders(userID) {
    try {
      const result = await order.findAll({ where: { user_id: userID } });

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async paymentService(orderCheck) {
    try {
      const { pay, orderID } = orderCheck;
      if (pay === "sucess") {
        await order.update(
          { status: "pay" },
          {
            where: {
              id: orderID,
            },
          }
        );
        return { message: "pay" };
      } else {
        return { message: "Not payment" };
      }
    } catch (error) {}
  }
}
