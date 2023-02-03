import { orderServices } from "../services/order.services.js";

export const getProducts = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const result = await orderServices.getAllOrders(userID);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const payment = async (req, res) => {
    try {
        
        const orderCheck = req.body
        const result = await orderServices.paymentService(orderCheck)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
        

};
