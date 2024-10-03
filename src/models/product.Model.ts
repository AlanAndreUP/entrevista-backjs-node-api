import connection from '../db/db.service';
import { Product } from '../utils/product';

export const createProduct = async (name: string, description: string, price: number, stock: number): Promise<Product> => {
  const query = 'INSERT INTO product (name, description, price, stock) VALUES (?, ?, ?, ?)';
  const [result] = await connection.promise().query(query, [name, description, price, stock]);
  return { id: (result as any).insertId, name, description, price, stock };
};

export const getProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM product';
  const [rows] = await connection.promise().query(query);
  return rows as Product[];
};
