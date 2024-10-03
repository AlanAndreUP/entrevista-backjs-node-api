import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); 
  }

  try {
    const user = verifyToken(token); 
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};
