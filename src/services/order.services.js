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
      const { statusPay, orderID } = orderCheck;
      if (statusPay === "pay") {
        const result = await order.update(
          { status: "pay" },
          {
            where: {
              id: orderID,
            },
          }
        );
        if (result[0] === 0) {
          return { message: "order undefined" };
        } else {
          return { message: "pay" };
        }
      } else {
        return { message: "Not payment" };
      }
    } catch (error) {}
  }
}
