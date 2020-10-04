import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      orderItems:[
          { 
              name: {String, required: true,}, 
              qty: {Number, required: true,}, 
              image: {String, required: true,}, 
              price: {Number, required: true,} ,
              product: {
                  type: mongoose.Schema.Types.ObjectId,
                  required: true,
                  ref: 'Product'

              }
            }
          
        ],
      shippingAddress: {
       address: {Type: String, required: true},
       city: {Type: String, required: true},
       postalCode: {Type: String, required: true},
       country: {Type: String, required: true},
      },
      paymentMethod: {
        type: String,
        required: true,
      },
      paymentResult: {
        id:{type: String},
        status:{type: String},
        update_time:{type: String},
        email_address:{type: String},
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDeliverd: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
      
    
    },
    {
      timestamp: true,
    }
  )
  
  const Order = mongoose.model('Order', orderSchema)
  
  export default Order
  

