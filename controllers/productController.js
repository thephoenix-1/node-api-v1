
const Product = require("../models/productModels");

const getProduct = async(req,res) =>{
    try {
        let {id} = req.params;
        let products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

const updateProductByID = async(req, res)=>{
    try {
        let {id} = req.params;
        let products = await Product.findByIdAndUpdate(id, req.body);
        console.log('body to be updated',req.body);
        if(!products){
            res.status(404).json({message: "Cannot find any product with the given id"})
        }
        let updatedProduct = await Product.findById(id);
        res.status(200).json({updatedProduct});
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const getAllProducts = async(req, res) => {
    try {
        let products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const createProduct = async(req,res) => {
    try {
        let product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
    
}
module.exports = {
    getProduct, 
    updateProductByID, 
    getAllProducts, 
    deleteProduct, 
    createProduct
}