import { Request, Response, NextFunction } from 'express'
import MySQL from '../../db/db'

const USERNAME_MIN_LENGTH = 2

const validateEmail = (email: String): boolean => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email.toLowerCase())
}

const isValidSHA1 = (sha1: String): boolean => {
  const reg = /^[a-f0-9]{40}$/
  return reg.test(sha1.toLowerCase())
}

// Register
const register = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<any> => {
  const { email, username, sha1 } = req.query
  // Invalid EMail
  // TODO confirm EMail
  if (!validateEmail(String(email))) {
    return res.status(500).json({ error: `Not a valid EMail: ${email}` })
  }
  // Username to short
  if (String(username).length < USERNAME_MIN_LENGTH) {
    return res.status(500).json({ error: `Username to short: ${username}` })
  }
  // Validate SHA1 Hash
  if (!isValidSHA1(String(sha1))) {
    return res.status(500).json({ error: `Invalid SHA1 Hash: ${sha1}` })
  }
  // Username Taken
  // Unique EMail (no!)

  const query = `INSERT INTO account (username, email, sha_pass_hash) VALUES ("${username}","${email}","${sha1}")`
  MySQL.query(query, (err: Error, results: Object[]) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      })
    } else {
      res.json({
        ok: true,
        realms: results,
      })
    }
  })

  //res.status(200).json({ email, username, sha1 })
}

export default register
