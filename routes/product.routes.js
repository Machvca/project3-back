const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.model");



router.get("/allproducts", (req, res, next) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
});



module.exports = router;