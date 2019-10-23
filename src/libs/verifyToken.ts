import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface IPayload{
    _id: string;
    iat: number;
    exp: number;
}

export const TokenValidation = (req: Request , res: Response, next: NextFunction ) => {
  const token = req.header('auth-token');
  console.log('TokenValidation');
  if(!token) return res.status(401).json('Access denied');
  const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'siNoHayEnv') as IPayload;
  console.log(payload);
//   req.userId = payload._id;




  // continua con la siguiente ruta.  
  next();

}