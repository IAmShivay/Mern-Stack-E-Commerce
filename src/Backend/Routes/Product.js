const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require ("../Controllers/ProductController");
const router = express.Router();

router.route("/product").get(getAllProduct);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);
// router.route('/product/new').post(createProduct)

module.exports = router;
