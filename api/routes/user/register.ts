import { Request, Response, NextFunction } from 'express'

// Register
const register = function (
  _req: Request,
  res: Response,
  _next: NextFunction
): any {
  res.status(200).json({ a: 'Hello' })
}

export default register
