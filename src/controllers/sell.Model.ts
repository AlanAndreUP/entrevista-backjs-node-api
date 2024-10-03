import { Request, Response } from 'express';
import { createSale, getSales } from '../models/sell.Model';

export const createSaleController = async (req: Request, res: Response) => {
  try {
    const { customerId, productId, quantity } = req.body;
    const newSale = await createSale(customerId, productId, quantity);
    res.status(201).json(newSale);
  } catch (error) {
    res.status(500).json({ message: 'Error creating sale', error });
  }
};

export const getSalesController = async (req: Request, res: Response) => {
  try {
    const sales = await getSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving sales', error });
  }
};
