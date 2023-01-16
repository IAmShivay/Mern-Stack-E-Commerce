const express = require('express');
const { getAllProduct } = require('../Controllers/ProductController');
const router = express.Router();


router.route('/products').get(getAllProduct)



module.exports = router