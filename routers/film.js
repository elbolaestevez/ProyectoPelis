const express = require('express'); // Importando módulo NPM (libería)
const filmRouter = express.Router();
const fecth = require('../utils/fecth');

filmRouter.get('/:title', async (req, res) => {
    const film =await fecth.getMovie(req.params.title);
    res.status(200).json(film);
});

filmRouter.post('/',async (req,res)=>{
    let title =req.body.title || "";
    res.status(200).json({message:"Se ha guardado "+title});
});

filmRouter.put('/',async (req,res)=>{
    let title =req.body.title || "";
    res.status(200).json({id:"0", message:"Se ha actualizado "+title});
});

filmRouter.delete('/',async (req,res)=>{
    let title =req.body.title || "";
    res.status(200).json({id:"0", message:"Se ha borrado "+title});
});



module.exports =filmRouter;