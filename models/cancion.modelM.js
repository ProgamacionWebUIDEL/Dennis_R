var MYSQL = require('mysql');

Schema = MYSQL.Schema;

var cancion = new MYSQL.Schema({
    nombre: {type:String},
    autor: {type:String},
    interprete:{type:String},
    genero: {type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra: {type:String},
    anio: {type:Number}
});

var cancionm = MYSQL.model('cancionm', cancion);
module.exports = cancionm;
