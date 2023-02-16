// import db
const db = require('./db');
// get all products details from db
const getProducts = () => {
   return db.Products.find().then(
        (result) => {
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Product not found' 
                }
            }
        }
    )
}



// add to wishlist details store to db
addtowishlist = (id,title,price,image,description) => {
    return db.Wishlst.findOne( {id} ).then(result => {
        if(result) {
            return{
                status:false,
                statusCode:400,
                message:"Product already added to wishlist"
            }

            
        }else{

            const newProduct = new db.Wishlst({ 
                id,
                title,
                price,
                image,
                description
            })

            newProduct.save()

            return{
                status:true,
                statusCode:200,
                message:'Product Added Successfully'
            }
        }

    })


}


// const getwishlist = () => {
//     // return db.Wishlst.findOne({id}).then(
//     return db.Wishlst.find().then(
//          (result) => {
//              if(result){
//                  return{
//                      status:true,
//                      statusCode:200,
//                      products:result
//                  }
//              }else{
//                  return{
//                      status:false,
//                      statusCode:402,
//                      message:'wishlist not found' 
//                  }
//              }
//          }
//      )
//  }
 
// }


const getwishlist = () => {
    // return db.Wishlst.findOne({id}).then(
    return db.Wishlst.find().then(
         (result) => {
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     products:result
                 }
             }else{
                 return{
                     status:false,
                     statusCode:402,
                     message:'wishlist not found' 
                 }
             }
         }
     )
 }
 

 deletewish = (id) => {
    return db.Wishlst.deleteOne({id}).then(
        (result) => {
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product removed Successfully",
                }
            }else{
                    return{
                        status:false,
                        statusCode:402,
                        message:'product not found' 
                    }
                }
            }
        
    )
 }




module.exports = {
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish

}