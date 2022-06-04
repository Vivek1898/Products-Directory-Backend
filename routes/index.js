const router = require("express").Router();

router.get("/", async (req, res, next) => {
	
	res.send("Welcome to Shopify portal");
});

module.exports = router;
