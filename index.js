const express = require("express");
const app = express();
const port = 8080;
const router = require("./Routes/router");

app.use(express.static("public"));

app.use("/", router);

app.listen(port, console.log(`Serveur lancé sur le port ${port}`));
