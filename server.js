const express = require("express");
const path = require("path");

//Database
require("./database/db");
require("dotenv").config();

const app = express();

// CORS
var cors = require("cors");
app.use(cors());

//PORT (also check for normalisation of port if necessary)
const PORT = process.env.PORT || 8000;

//Routes:
const homepage = require("./routes/index");
const productRoutes = require("./routes/productRoutes");

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", homepage);
app.use("/products", productRoutes);

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});
