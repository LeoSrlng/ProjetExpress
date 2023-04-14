import express from "express";
const app = express();
const port = 8080;
import router from "./Routes/router.js";

app.use(express.static("public"));

app.use("/", router);

app.listen(port, console.log(`Serveur lancé sur le port ${port}`));
