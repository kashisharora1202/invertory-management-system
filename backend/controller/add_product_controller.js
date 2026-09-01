const express = require("express")
const productSchema = require("../schema/product_schema")
const cloudinary = require("../config/cloudinary")

async function product(req,res) {
    try {

        const {product,price,catagory,stock} = req.body 
        const {image} = req.file
    

        const uploadtocloudinary = ()=>{
            return new Promise((resolve,reject)=>{
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder:"inverntory-products"
                    },(error,result)=>{
                        if(error){
                            reject(error)
                        }else{
                            resolve(result)
                        }
                    }
                )
                stream.end(req.file.buffer)
            })
        }

        const result = await uploadtocloudinary()


        // ab user find krege ki uske pass phale se product hai ya nhi 

       

       const find = await productSchema.findOne({
        $and:[{product:product},
            {userid:req.user.id}
        ]
       })

       
       
       if(find){
           const prevStock = find.stock
           console.log("stock",prevStock)
           const updatestock = find.stock + stock
           console.log("updatestock",updatestock)

           const searchProduct = await productSchema.updateOne(
            {_id : find._id},
            {$set:{
                stock:updatestock,
                product:product,
                price:price,
                image:result.url,
                stock:updatestock
                }}
           )
           
           if(updatestock<=5){
                return res.status(201).json({message:" This product Stock is less then 5"})
            }
            else{
                return res.status(201).json({message:"product submit successfully find"})
            }
        }

        if(!find){

            const updatestock = stock

            const addproduct = await productSchema.create({
                product:product,
                image:result.url,
                price:price,
                catagory:catagory,
                stock:updatestock,
                userid:req.user.id,    
            })
            
            if(updatestock<=5){
                return  res.status(201).json({message:" This product Stock is less then 5",addproduct})
            }
        }
    }
     catch (error) {
        return res.status(500).json({message:"product uploading failed",error:error.message})
        console.log(error.message)
    }
}

module.exports=product