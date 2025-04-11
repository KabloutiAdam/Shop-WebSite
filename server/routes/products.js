const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/productController");
const { updateProduct } = require("../controllers/brandController");

router.get("/", getAllProducts);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;