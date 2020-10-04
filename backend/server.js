import express from 'express'
import products from './data/products.js'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'

dotenv.config()

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API running with nodemon')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})
const PORT = process.env.PORT
app.listen(
  PORT || 5000,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline
  )
)
