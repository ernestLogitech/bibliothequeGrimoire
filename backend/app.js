//on importe le composant express installe
const express = require("express");
//on installe et importe le body-parser pour mieux exploiter le corps de la requete
const bodyParser = require("body-parser");
//
const mongoose = require("mongoose");
//i,porte le router
/*
mongoose

    .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })*/
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/User");
const cors = require("cors");
const path = require("path");
mongoose
  .connect(
    "mongodb+srv://samos:DN1uWUeuwiInceuF@cluster0.as3ga73.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//on connecte le fichier app au framework express
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//on install les cors dans le projet avec npm i cors
app.use(cors());
//on utilise le body parser pour avoir directement acces au corps de la requette
app.use(bodyParser.json());

//app.use("/images", express.static(path.join(__dirname, "images")));
// on donne les routes a notre app
app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);
//on exporte le fichier app pour etre utilisable par les autres fichiers
module.exports = app;
