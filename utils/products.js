const fetch = require('node-fetch');

require('dotenv').config();
const apiKey = process.env.API_KEY;

const getProductByTitle = async (title) => {
    try {
        let response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`); 
        let products = await response.json(); //{}
        return [products];
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return [];
    }
}


const postFilm = (req, res) =>{
    newFilm = req.body;
    console.log(newFilm);
    res.status(201).send(`Film ${newFilm.title} archivada`);
}

const movie = {
    getProductByTitle,
    postFilm
}
module.exports=movie