
const movieRouter= require("./routers/movieRouter")


// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
const router = express.Router();

const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000

// Rutas
//const entryRouter = require('./routes/entry');
//const productRouter = require('./routes/products');


// Rutas
//app.use("/",productRouter);// WEB
//app.use("/api",entryRouter);// API


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





app.use('/api', movieRouter)

