import HomeController from "../controllers/home.js";
import SalonController from "../controllers/salon.js";
import express from "express";

const router = express.Router();

router.get("/", HomeController);

router.get("/salon/:id", SalonController);

router.get("/page2", function (req, res) {
	res.send("ici la future page page2");
});

router.get("/page3", function (req, res) {
	res.send("ici la future page page3");
});

export default router;
