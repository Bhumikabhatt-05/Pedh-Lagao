//function for add product
import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";
import path from "path";
import fs from 'fs'
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, uses } = req.body
        const image = req.files?.image?.[0];

        if (!image) {
            return res.json({ success: false, message: "No image uploaded" })
        }

        const filePath = path.resolve(image.path);

        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image'
        })

        // Next id = highest existing id + 1
        const lastProduct = await productModel.findOne().sort({ id: -1 })
        const nextId = lastProduct ? lastProduct.id + 1 : 1

        const productData = {
            id: nextId,
            name,
            description,
            category,
            price: Number(price),
            uses: (uses || '').split(',').map((u) => u.trim()).filter(Boolean),
            image: result.secure_url,
        }

        const product = new productModel(productData)
        await product.save()

        res.json({ success: true, message: "Product added" })

    } catch (error) {
        console.log("FULL ERROR:", JSON.stringify(error, null, 2))
        res.json({ success: false, message: error.message })
    }
}

//function for list product
const listProduct=async (req,res)=>{
    try{
        const products = await productModel.find({})
        res.json({success:true,products})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//function for removing product

const removeProduct=async (req,res)=>{
    try{
          const { id } = req.body;

        if (!id) {
            return res.json({
                success:false,
                message:"Id is required"
            })
        }

        await productModel.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Product removed"
        })
    }catch(error){
         console.log(error)
        res.json({success:false,message:error.message})
   
    }
}

//function for single product info

const singleProduct=async (req,res) => {
    try{
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {addProduct,listProduct,removeProduct,singleProduct}