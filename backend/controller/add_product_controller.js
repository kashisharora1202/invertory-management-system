const express = require("express")
const productSchema = require("../schema/product_schema")

async function product(req,res) {
    try {

        const {product,image,price,catagory} = req.body

        console.log(req.user)

       const find = await productSchema.findOne({
        $and:[{product:product},
            {userid:req.user.id}
        ]
       })

       
       
       if(find){
           const stock = find.stock
           console.log("stock",stock)
           const updatestock = find.stock + 1
           console.log("updatestock",updatestock)

           const searchProduct = await productSchema.updateOne(
            {_id : find._id},
            {$set:{
                stock:updatestock,
                product:product,
                price:price,
                image:image
                }}
           )
           
           if(stock<=5){
                return  res.status(201).json({message:"update This product Stock is less then 5"})
            }
            else{
                return res.status(201).json({message:"product submit successfully find"})
            }
        }

        if(!find){

            
            const addproduct = await productSchema.create({
                product:product,
                image:image,
                price:price,
                catagory:catagory,
                stock:1,
                userid:req.user.id,    
            })
            
            if(addproduct.stock<=5){
                return  res.status(201).json({message:"new This product Stock is less then 5",addproduct})
            }
        }
    }
     catch (error) {
        return res.status(500).json({message:"product uploading failed",error:error.message})
    }
}

module.exports=product