import { Request, Response, NextFunction } from 'express'

export const isAuthenticated = function (
  req: Request,
  res: Response,
  next: NextFunction
): any {
  if (req.user === 'yo') {
    return next()
  }
  return res.status(401).json({ message: 'unauthorized' })
}

export default isAuthenticated
