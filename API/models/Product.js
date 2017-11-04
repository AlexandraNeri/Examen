const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    Nombre: String,
    Precio: Number,
    Descripcion: String,
    Imagen: String
    /*temporada: String,
    genero: String,
    edad: String,
    
    talla: String,
    dimensiones:{
        height: Number,
        width: Number
    },
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }*/
});


let Product = mongoose.model('Product',productSchema);

module.exports = Product;