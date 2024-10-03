import connection from '../db/db.service';
import { Client } from '../utils/client';

export const createCustomer = async (name: string, email: string, phone: string, address: string): Promise<Client> => {
  const query = 'INSERT INTO customer (name, email, phone, address) VALUES (?, ?, ?, ?)';
  const [result] = await connection.promise().query(query, [name, email, phone, address]);
  return { id: (result as any).insertId, name, email, phone, address }; 
};

export const getCustomers = async (): Promise<Client[]> => {
  const query = 'SELECT * FROM customer';
  const [rows] = await connection.promise().query(query);
  return rows as Client[];
};
