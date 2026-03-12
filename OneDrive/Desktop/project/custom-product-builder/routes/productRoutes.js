const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
router.get("/products", productController.getProducts);
router.post("/add-product", productController.addProduct);
module.exports = router;
router.post("/add-product", async (req, res) => {
  const Product = require("../modules/product");
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  await newProduct.save();
  res.json({ message: "Product added successfully" });
});