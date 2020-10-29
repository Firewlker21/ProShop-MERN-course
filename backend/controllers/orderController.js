import express from 'express'
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc Create order
// @route POST/api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No orders')
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      itemsPrice,
      taxPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(200).json(order)
  }
})

export { addOrderItems }
