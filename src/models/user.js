// LLAMAMOS A mongoose
const mongoose = require("mongoose");

// CREAMOS NUEVO USUARIO CON ESQUEMA DE DATOS Y TIPO QUE LLEVA
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    age:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

// SE EXPORTA
module.exports = mongoose.model('User', userSchema);
