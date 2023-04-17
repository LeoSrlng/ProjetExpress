import HomeController from "../controllers/home.js";
import SalonController from "../controllers/salon.js";
import express from "express";

const router = express.Router();

router.use(function num(req, res, next) {
	let NumSalon = Math.floor(Math.random() * 9999);
	res.locals.NumSalon = NumSalon
	next();
});

router.get("/", HomeController);

router.get("/salon/:id", SalonController);

router.get("/page2", function (req, res) {
	res.send("ici la future page2");
});

router.get("/page3", function (req, res) {
	res.send("ici la future page3");
});

export default router;