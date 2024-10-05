import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string || 'e7a8a7b5c6d4f7b83c5e29a2d11b6c27a33b42d5c13ea5e9352c45dd5b9b4d'; 

export const generateToken = (id: number) => {
  return jwt.sign({ id }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
