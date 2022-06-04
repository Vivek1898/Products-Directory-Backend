var mongoose = require("mongoose");

require("dotenv").config();

var products = mongoose.Schema({
	_id: {
		type: String,
	},
	pname: {
		type: String,
	},

	price: {
		type: Number,
	},
	stockCount: {
		type: Number,
	},
	pcategory: {
		type: String,
	},
	productId: {
		type: Number,
	},
});

var Products = (module.exports = mongoose.model(
	"products",
	products,
	"products"
));

module.exports.getProductById = function (id, callback) {
	Products.findById(id, callback);
};
