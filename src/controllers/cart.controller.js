import { carService } from "../services/car.services.js";

export const addProduct = async (req, res) => {
  try {
    const productForCar = req.body;
    const productAddCar = await carService.add(productForCar);

    res.json(productAddCar);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const carProducts = async (req, res) => {
  try {
    const { id:userID } = req.params;
    const productsInCar = await carService.productsCar(userID);
    res.json(productsInCar);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const carPurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await carService.purchaseProduct(id);
    res.json(purchase);
  } catch (error) {
    res.status(400).json(error.message)
  }
};


