const router = require("express").Router();

const getAllProducts =
	require("../controllers/productController").getAllProduct;
const addProduct = require("../controllers/productController").addProduct;
const deleteProduct = require("../controllers/productController").deleteProduct;
const editProduct = require("../controllers/productController").editProduct;
const exportToCSV = require("../controllers/productController").exportToCSV;

router.post("/getallproducts", getAllProducts);
router.post("/addproduct", addProduct);
router.post("/deleteproductwithid", deleteProduct);
router.post("/editproduct", editProduct);
router.post("/exportpidtoCSV", exportToCSV);

module.exports = router;
