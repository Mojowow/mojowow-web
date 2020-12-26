import { Router } from 'express'
// Initialize Controller
import register from './register'

const user = Router()

// Register
user.get('/register', register)

// Login
// router.post('/users/login', usersController.login)

// Get User
// router.get('/users/user', usersController.user)

export default user
