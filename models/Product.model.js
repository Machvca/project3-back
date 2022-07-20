const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const productSchema = new Schema({
    name: String,
    type: String,
    color: [String],
    image: String, 
    price: Number, 
    description: String,
    link: String,
  
  //project: { type: Schema.Types.ObjectId, ref: "Project" },
});

module.exports = model("Product", productSchema);