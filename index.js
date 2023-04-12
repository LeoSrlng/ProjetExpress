const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", { teste: "salut via une variable" });
});

app.listen(port, () => {
	console.log(`Serveur lancé sur le port ${port}`);
});
