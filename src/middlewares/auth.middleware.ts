import { Request, Response, NextFunction } from 'express';
import { IncomingHttpHeaders } from 'http';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

export default function authMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  let { authorization: token } = req.headers as IncomingHttpHeaders;
  if (!token) throw new HttpException(401, 'Token not found');

  try {
    token = token.substring(7, token.length);
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (err) {
    throw new HttpException(401, 'Invalid token');
  }
}
