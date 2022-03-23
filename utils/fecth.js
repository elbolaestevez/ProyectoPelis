const fetch = require('node-fetch');

require('dotenv').config();
const apiKey = process.env.API_KEY;

const getMovie = async (title) => {
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

const movie = {
    getMovie
}
module.exports=movie