const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.model");


// Mostramos todos los articulos en esta vista. Pero no nos sirve para el proyecto
router.get("/allproducts", (req, res, next) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
});

// We are going to show 6 different categories on this route
router.get("/products", (req, res, next) => {
  Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
});

// Let's create a new route for each category
router.get("/products/keyboards", (req, res, next) => {
  Product.find({ type: "keyboard" })
    .then((keyProducts) => res.json(keyProducts))
    .catch((err) => res.json(err)); 
  });

router.get("/products/chairs", (req, res, next) => {
  Product.find({ type: "chair" })
    .then((chaProducts) => res.json(chaProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/merchandising", (req, res, next) => {
  Product.find({ type: "merchandising" })
    .then((merchProducts) => res.json(merchProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/snacks", (req, res, next) => {
  Product.find({ type: "snack" })
    .then((snaProducts) => res.json(snaProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/accesories", (req, res, next) => {
  Product.find({ type: "accessories" })
    .then((accProducts) => res.json(accProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/mouses", (req, res, next) => {
  Product.find({ type: "mouse" })
    .then((mouProducts) => res.json(mouProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/headphones", (req, res, next) => {
  Product.find({ type: "headphones" })
    .then((headProducts) => res.json(headProducts))
    .catch((err) => res.json(err));
  });

router.get("/products/monitors", (req, res, next) => {
  Product.find({ type: "monitor" })
    .then((monProducts) => res.json(monProducts))
    .catch((err) => res.json(err));
  });  

module.exports = router;