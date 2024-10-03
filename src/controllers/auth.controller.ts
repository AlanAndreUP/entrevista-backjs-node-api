import { Request, Response } from 'express';
import { generateToken } from '../utils/auth';

export const loginController = async (req: Request, res: Response) => {
  const userId = 1;
  const token = generateToken(userId);

  res.json({ token });
};
