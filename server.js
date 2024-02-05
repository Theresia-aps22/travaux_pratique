
// //création d'un server
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Voilà la réponse du serveur!');
//     //console.log('hey');
// });

// server.listen(process.env.PORT || 3000);


//créer un serveur
const http = require('http');

//=> app.js
const app = require('./app');

app.set('port', process.env.PORT || 3000);

//créer un serveur app
const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});