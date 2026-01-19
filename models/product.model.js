const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Allows us to add two more extra fields, which is createdAt and updatedAt
  }
);


const Product = mongoose.model("Product", ProductSchema); //Allow MongoDb to access the above 

module.exports = Product; //model changed to module, so no error