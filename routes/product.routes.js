const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");


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

  // Adding favorites. 
  router.post("/products/add-favorite", (req, res) => {
    const query = ({ name, type, color, image, price, description, link, userId, _id} =
      req.body);
      console.log(query);
      console.log(userId);
      console.log(query._id);
      //const idToCheck = _id;
  
    Product.find({_id: query._id }).then((ProductsArray) => {
      
      if (ProductsArray.length === 0) {
        Product.create(query)
          .then((result) => {
            User.findByIdAndUpdate(query.userId, {
              $push: { favorites: result.id },
            }).then(() => {
              res.status(200).json(ProductsArray);
            });
          })
          .catch((err) => res.json(err));
      } else {
        User.findById(query.userId)
          .then((user) => {
            if (!user.favorites.includes(ProductsArray[0]._id)) {
              User.findByIdAndUpdate(query.userId, {
                $push: { favorites: ProductsArray[0]._id },
              }).then((ProductsArray) => {
                
                res.status(200).json(ProductsArray);
              });
            } else {
              res.status(200).json({message: "Hola"});
            }
          })
          .catch((err) => {
            res.json(err);
          });
      }
    });
  });
  

module.exports = router;