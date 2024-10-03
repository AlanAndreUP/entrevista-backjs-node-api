import { Request, Response } from 'express';
import { createProduct, getProducts } from '../models/product.Model';

export const createProductController = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = await createProduct(name, description, price, stock);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
};
