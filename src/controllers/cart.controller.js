import { carService } from "../services/car.services.js";

export const addProduct = async (req, res) => {
  try {
    const productForCar = req.body;
    const productAddCar = await carService.add(productForCar);

    if (productAddCar === null) {
      res.json({
        message: "producto no disponible || product not available",
      });
    } else {
      res.json({ message: "add product succes" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const carProducts = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const productsInCar = await carService.productsCar(userID);
    res.json(productsInCar.product_in_carts);
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
    res.status(400).json(error.message);
  }
};
