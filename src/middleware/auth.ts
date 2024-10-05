import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const user =await verifyToken(token); 
    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
