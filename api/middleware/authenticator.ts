import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config'

export const authenticator = function (
  req: Request,
  _res: Response,
  next: NextFunction
): any {
  req.user = null
  const token = req.headers.authorization
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(
      token.replace(/^Bearer\s/, ''),
      config.SERVER.JWTSECRET,
      function (err, _decoded) {
        // TODO
        if (err) {
          req.user = 'bo'
        } else {
          req.user = 'yo'
        }
      }
    )
  }
  return next()
}

export default authenticator
