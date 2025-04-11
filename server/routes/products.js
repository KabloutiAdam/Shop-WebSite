const express = require("express");
const router = express.Router();
const { getAllProducts, getProductStock } = require("../controllers/productController");
const { updateProduct } = require("../controllers/productController");

router.get("/", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.get("/productStock", getProductStock)

module.exports = router;