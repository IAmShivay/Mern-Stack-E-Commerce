const express = require("express");
const middleware = require("../Middleware/error");
const app = express();

const product = require("../Routes/Product");
app.use(express.json());
app.use(product);
app.use(middleware);

module.exports = app;

// middleware for errorHandling
