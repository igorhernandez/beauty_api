const express = require("express");
const { PRODUCTS } = require("./db");
const products = PRODUCTS["products-images"];
const app = express();

app.get("/products", (req, res) => {
  const { page, limit } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const productsFiltered = products.slice(startIndex, endIndex);
  setTimeout(() => {
    res.json({
      lastPage: endIndex >= products.length,
      products: productsFiltered,
    });
  }, 1000);
});

app.listen(3000);
