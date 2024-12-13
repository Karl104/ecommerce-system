import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = 5000

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
  }),
)
app.use(express.json())

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
