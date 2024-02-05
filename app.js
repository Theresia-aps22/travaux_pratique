let express = require('express');
let app = express();

let bodyparser = require('body-parser');
const { render } = require('ejs');



//indique qu'on va utiliser le dossier public pour stocker des données statiques et que l'utilisateur peut accéder à ce dossier
app.use('/publics',express.static("./public"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//indique qu'on veut utiliser la bibliothèque EJS, ou le EJS créera du HTML pour retourner au naviguateur de l'utilisateur
app.set("view engine", "ejs");
//indique le chemin d'accès au dossier contenant nos pages
app.set("views", "./views");

app.get("/", function(req, res){
    res.render('testPage', {test: 'test Page', text:""})
});
app.get("/formulaire", function (req, res) {
    res.render('formulaire', { test: '', text: "" });
});

app.post("/formulaire", function (req, res) {
    // console.log(req.body.firstname + " " + req.body.lastname)
    if (req.body.firstname === '' || req.body.lastname === '' || req.body.mdp === '' || req.body.confirmMdp === '') {
        res.render('formulaire', { test: 'Veuillez saisir tous les champs!', text: "" });
    } else if (req.body.mdp !== req.body.confirmMdp) {
        res.render('formulaire', { test: 'Confirmation mot de passe incorrecte', text: "" });
    } else {
        res.render('formulaire', { test: "Bonjour " + req.body.firstname + " " + req.body.lastname , text: ""});
    }
});

//quizz
//en utilise le req.params. si on a passé le paramètre dans l'url

let reponse = ["ChristophColomb","O2", "Laravel","Facebook","Einstein"];

app.get('/quizz1', function(req, res){
    res.render('quizPage1', { test: '', text: "" });
});

app.post('/quizz1/:answer', function(req, res){
    if(reponse.includes(req.body.answer )){
        res.render('quizPage2', { test: '', text: "" });
    }else {
        res.render('quizPage1', { test: "Votre réponse est faux."});
    }
});


app.get('/quizz2', function(req, res){
    res.render('quizzPage2', { test: '', text: "" });
});

app.post('/quizz2/:answer', function(req, res){
    if(reponse.includes(req.body.answer )){
        res.render('quizPage3', { test: '', text: "" });
    }else {s
        res.render('quizPage2', { test: "Votre réponse est faux."});
    }
});

app.get('/quizz3', function(req, res){
    res.render('quizzPage3', { test: '', text: "" });
});
app.post('/quizz3/:answer', function(req, res){
    if(reponse.includes(req.body.answer )){
        res.render('quizPage4');
    }else {
        res.render('quizPage3', { test: "Votre réponse est faux."});
    }
})
app.get('/quizz4', function(req, res){
    res.render('quizzPage4', { test: '', text: "" });
});

app.post('/quizz3/quizz4/:answer', function(req, res){
    if(reponse.includes(req.body.answer )){
        res.render('quizPage5');
    }else {
        res.render('quizPage4', { test: "Votre réponse est faux."});
    }
});

app.get('/quizz5', function(req, res){
    res.render('quizzPage5', { test: '', text: "" });
});
app.post('/quizz5/:answer', function(req, res){
    if(reponse.includes(req.body.answer)){
        res.render('resultat');
    }else {
        res.render('quizPage5', { test: "Votre réponse est faux."});
    }
});

module.exports = app;
