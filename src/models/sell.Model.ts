import connection from '../db/db.service';
import { Sell } from '../utils/sell';

export const createSale = async (customerId: number, productId: number, quantity: number): Promise<Sell> => {
  const query = 'INSERT INTO sale (customerId, productId, quantity) VALUES (?, ?, ?)';
  const [result] = await connection.promise().query(query, [customerId, productId, quantity]);
  return { id: (result as any).insertId, customerId, productId, quantity, date: new Date() };
};

export const getSales = async (): Promise<Sell[]> => {
  const query = 'SELECT * FROM sale';
  const [rows] = await connection.promise().query(query);
  return rows as Sell[];
};
