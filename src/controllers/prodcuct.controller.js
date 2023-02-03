import { productService } from "../services/product.services.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const result = await productService.create(newProduct);
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const allProduct = async (req, res ) =>{
  try {
    const products = await productService.all()
    res.json(products)
  } catch (error) {
    res.status(400).json(error.message)
    
  }
}