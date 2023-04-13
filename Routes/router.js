var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

router.get("/", (req, res) => {
	res.render("home.ejs", { teste: "salut via une variable" });
});

router.get("/page1", function (req, res) {
	res.send("ici la future page page1");
});

router.get("/page2", function (req, res) {
	res.send("ici la future page page2");
});

router.get("/page3", function (req, res) {
	res.send("ici la future page page3");
});

module.exports = router;
