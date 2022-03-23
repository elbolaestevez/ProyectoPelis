
// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
const bodyParser = require('body-parser');
const router = express.Router();

const app = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000;

app.use(bodyParser.json());

const filmRouter= require("./routers/film");//Llamamos al router

app.use('/api/film', filmRouter);//Usamos el router

app.use(function(req, res, next) {
    return res.status(404).send({ message: 'Ruta '+req.url+' no encontrada.' });
  });

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salió mal.');
  });
=======



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})








