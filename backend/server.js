import express from 'express'

import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('API running with nodemon')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(
  PORT || 5000,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline
  )
)
