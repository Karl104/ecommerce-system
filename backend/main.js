import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config()

// Ensure __dirname is defined (needed in ES modules)
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 5000

// Path to simulate the "database" (users.json)
const USERS_FILE = path.join(__dirname, 'users.json')

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
  }),
)
app.use(express.json())

// Helper: Read users from the file
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    // If the file does not exist, initialize it with an empty array
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2))
    return []
  }
  const data = fs.readFileSync(USERS_FILE, 'utf-8')
  return JSON.parse(data || '[]')
}

// Helper: Write users to the file
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
}

// Route: Sign-Up
app.post('/signup', (req, res) => {
  const { fullName, userName, phoneNumber, birthDate, gender, email, password } = req.body

  // Validate required fields
  if (!fullName || !userName || !phoneNumber || !birthDate || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields.' })
  }

  // Validate password length
  if (password.length < 4) {
    return res.status(400).json({ message: 'Password must be at least 4 characters long.' })
  }

  const users = readUsers()

  // Check if user with the same email or username already exists
  const existingUser = users.find((user) => user.email === email || user.userName === userName)
  if (existingUser) {
    return res.status(409).json({ message: 'Email or Username already exists.' })
  }

  // Add new user
  const newUser = { fullName, userName, phoneNumber, birthDate, gender, email, password }
  users.push(newUser)
  writeUsers(users)

  res.status(201).json({ message: 'Signup successful!' })
})

// Route: Login
app.post('/login', (req, res) => {
  const { userName, password } = req.body

  // Validate required fields
  if (!userName || !password) {
    return res.status(400).json({ message: 'Username and password are required.' })
  }

  const users = readUsers()

  // Check if user exists with the given username and password
  const user = users.find((u) => u.userName === userName && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password.' })
  }

  // Successful login
  return res.status(200).json({
    message: 'Login successful!',
    user: {
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
    },
  })
})

// Example route: Root
app.get('/', (req, res) => {
  res.send('Backend is running!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
