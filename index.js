// indique qu'on va utiliser Express JS
var express = require('express');

// créer un objet Express
var app = express();

// indique qu'on va utiliser le dossier public pour stocker des données statiques et que l'utilisateur peut accéder à ce dossier
app.use(express.static("public"));

// indique qu'on veut utiliser la bibliothèque EJS, où EJS créera du HTML pour retourner au navigateur de l'utilisateur
app.set("view engine", "ejs");

// indique le chemin d'accès au dossier contenant nos pages
app.set("views", "./views");

// indique le port utilisé
app.listen(3000, function () {
    console.log('Serveur démarré sur le port 3000');
});

// définit le chemin d'accès à une page
app.get("/", function (request, response) {
    response.render("homePage");
});

app.get("/test", function (request, response) {
    response.render("testPage");
});

app.get("/formulaire", function (request, response) {
    response.render("formulaire");
});
