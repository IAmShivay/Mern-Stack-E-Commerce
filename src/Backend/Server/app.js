const express = require("express");

const app = express();

const product = require("../Routes/Product");
app.use(express.json());
app.use(product);
module.exports = app;
