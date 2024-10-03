import { Request, Response } from 'express';
import { createCustomer, getCustomers } from '../models/client.Model';

export const createCustomerController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, address } = req.body;
    const newCustomer = await createCustomer(name, email, phone, address);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating customer', error });
  }
};

export const getCustomersController = async (req: Request, res: Response) => {
  try {
    const customers = await getCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving customers', error });
  }
};
