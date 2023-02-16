// import mongoose
const mongoose = require('mongoose')
// define the connection string
mongoose.connect('mongodb://localhost:27017/cart', () => {
    console.log('connect to mongodb');
})
// create a model for the products
const Products = mongoose.model('Products', {
    // schema creation
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlst = mongoose.model('wishlists',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
})

module.exports = {
    Products,
    Wishlst,
}
