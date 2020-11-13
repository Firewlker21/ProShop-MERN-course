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
    itemsPrice,
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

// @desc Get order by ID
// @route GET/api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('No order found')
  }
})

// @desc update order to paid
// @route PUT/api/orders/:id/pay
// @access Private

const updateOrdertoPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  

  if (order) {
    order.isPaid = true,
    order.PaidAt = Date.now(),
    order.paymentResult = {
      id: req.body.id,
      status: req.body.staus,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,

    }
    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('No order found')
  }
})

export { addOrderItems, getOrderById, updateOrdertoPaid }
