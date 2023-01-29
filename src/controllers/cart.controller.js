import { carService } from "../services/car.services.js";

export const addProduct = async (req, res) => {
  try {
    const productForCar = req.body;
    const cart = await carService.add(productForCar);
    res.json(cart);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
