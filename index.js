// indique qu'on va utiliser express JS
var express = require('express');

//créer un objet Express
var app = express();


//indique qu'on va utiliser le dossier public pour stocker des données statiques et que l'utilisateur peut accéder à ce dossier
app.use(express.static("public"));


//indique qu'on veut utiliser la bibliothèque EJS, ou le EJS créera du HTML pour retourner au naviguateur de l'utilisateur
app.set("view engine", "ejs");

//indique le chemin d'accès au dossier contenant nos pages
app.set("views", "./views");

//indique le port utilisé
app.listen(3000);


//défini le chemin d'accès à une page
app.get("/", function(request, response){
    response.render("homePage");
});

app.get("/test", function(request, response){
    response.render("testPage");
})