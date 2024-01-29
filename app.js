let express = require('express');
let bodyparser = require('body-parser');
const { render } = require('ejs');

let app = express();

//indique qu'on va utiliser le dossier public pour stocker des données statiques et que l'utilisateur peut accéder à ce dossier
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//indique qu'on veut utiliser la bibliothèque EJS, ou le EJS créera du HTML pour retourner au naviguateur de l'utilisateur
app.set("view engine", "ejs");
//indique le chemin d'accès au dossier contenant nos pages
app.set("views", "./views");

app.get("/", function(req, res){
    res.render('testPage', {test: 'test Page', text:""})
});

app.post("/", function(req, res){
    //console.log(req.body.firstname + " " + req.body.lastname)
    if (req.body.firstname --- '' || req.body.lastname --- '' || req.body.mdp --- '' || req.body.confirmMdp --- '') {
        res.render('testPage', {test: 'test Page', text:"Veuillez saisir tout les champs!"});
    }
    else if (req.body.mdp != req.body.confirmMdp) {
        res.render('testPage', {test: 'test Page', text:"confirmation mot de passe incorrect"});
    }
    else{
        res.render('testPage', {test: 'test Page', text:"Bonjour" + req.body.firstname + req.body.lastname});
    }
});
