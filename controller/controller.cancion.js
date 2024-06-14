var cancion = require("../models/cancion.model"),
    express=require('express'),
    router = express.Router();

router.post('/crear',(req,res)=>{
    console.log("llega")
    var body = req.body;
    cancion.insertMany({
        nombre : body.nombre,
        autor: body.autor,
        interprete: body.interprete,
        genero: body.genero,
        duracion: body.duracion,
        fotografia: body.fotografia,
        letra: body.letra,
        anio: body.anio

    },).then(function() {
        res.status(200).json("Datos guardados")
        console.log("Succesfully saved defult items to BD");
    })
    .catch(function(err){
        console.log(err);
        throw err;
    });;
});


module.exports = router;