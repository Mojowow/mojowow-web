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
  // Parameters
  const email = String(req.query.email)
  const username = String(req.query.username)
  const sha1 = String(req.query.sha1)

  // Invalid EMail
  // TODO confirm EMail
  if (!validateEmail(email)) {
    return res.status(500).json({ error: `Not a valid EMail: ${email}` })
  }
  // Username to short
  if (username.length < USERNAME_MIN_LENGTH) {
    return res.status(500).json({ error: `Username to short: ${username}` })
  }
  // Validate SHA1 Hash
  if (!isValidSHA1(sha1)) {
    return res.status(500).json({ error: `Invalid SHA1 Hash: ${sha1}` })
  }
  // Username Taken
  const userTaken = await MySQL.query(
    `SELECT COUNT(*) AS count FROM account WHERE username = ?;`,
    [username]
  )
  if (userTaken.error !== null) {
    return res
      .status(500)
      .json({ error: `An error occurred: ${userTaken.error}` })
  }
  // Error?
  if (userTaken.result[0].count > 0) {
    return res
      .status(500)
      .json({ error: `Username already taken: ${username}` })
  }

  // Insert new User
  const result = await MySQL.query(
    `INSERT INTO account (username, email, sha_pass_hash) VALUES (?,?,?)`,
    [username, email, sha1]
  )
  // Error?
  if (result.error !== null) {
    return res.status(500).json({ error: `An error occurred: ${result.error}` })
  }
  res.status(200).json({})
}

export default register
