// Connecting with the MongoDB server
const mongoose = require("mongoose");
require("dotenv").config();
const env = process.env;

var db = mongoose.connection;

mongoose.connect(process.env.CONN, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

console.log("Connect ok");

db.on("error", console.error.bind(console, "DB connection error:"));

db.once("open", function () {
	console.log("DB connection successful");
});

module.exports = {
	db,
};
