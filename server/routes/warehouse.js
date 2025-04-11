const express = require("express");
const { getAllWarehouses } = require("../controllers/warehouseController");
const router = express.Router();


router.get("/", getAllWarehouses);

module.exports = router;