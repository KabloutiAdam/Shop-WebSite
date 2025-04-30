const express = require("express");
const router = express.Router();
const { getAllProducts, getProductStock, getProductById, updateProductStock, addProductStock} = require("../controllers/productController");
const { updateProduct } = require("../controllers/productController");

router.get("/", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.get("/productStock", getProductStock)
router.get("/getProductById", getProductById)
router.put("/updateProductStock", updateProductStock)
router.put("/addProductStock", addProductStock)

module.exports = router;