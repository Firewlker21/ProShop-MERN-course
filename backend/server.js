import express from 'express'

import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API running with nodemon')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT
app.listen(
  PORT || 5000,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline
  )
)
