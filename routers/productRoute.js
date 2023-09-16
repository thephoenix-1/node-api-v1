const express = require("express");
const {getProduct, updateProductByID, getAllProducts, deleteProduct, createProduct} = require("../controllers/productController");
const router = express.Router();

router.use(express.json());
router.get('/:id', getProduct);

router.put('/:id', updateProductByID);
router.get('/', getAllProducts);
router.post('/', createProduct);
//Delete a product
router.delete('/:id', deleteProduct)

module.exports = router;
