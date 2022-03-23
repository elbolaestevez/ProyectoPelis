const { Router } = require('express');
const express = require('express'); // Importando módulo NPM (libería)
const movie = require("../utils/products")
const movieRouter = express.Router();




movieRouter.get('/film/:title', async (req, res) => {
    const newmovie= await movie.getProductByTitle(req.params.title)
    res.send(newmovie);
})

movieRouter.post('/film:title', film.postFilm);

module.exports = movieRouter