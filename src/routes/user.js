// CREO CONST LLAMANDO A EXPRESS
const express = require("express");
// IMPORTAMOS DE CARPETA MODELS cada modelo
const userSchema = require("../models/user");


//SE CREA ENRUTADOR
const router = express.Router();

// CREAR NUEVOS USUARIOS TRAYENDO userSchema con su ESTRUCTURA
// ASI COMO QUE GUARDE (save) Y RESPONDA (res) CON LOS DATOS
// ESTA ESTRUCTURA ES LLENVADA A request.http

router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    //PARA GUARDARLO EN BASE DATOS
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    
});

// OBTENER TODOS LOS USUARIOS

router.get('/users', (req, res) => {
    userSchema

    //PARA ENCONTRAR USUARIOS EN BASE DATOS    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    
});

// ENCONTRAR UN USUARIO 

router.get('/users/:id', (req, res) => {
    // CREO CONST PARA BUSCAR POR id 
    const {id} = req.params;
    userSchema

    //PARA ENCONTRAR USUARIOS EN BASE DATOS    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    
});

// ACTUALIZAR UN USUARIO

router.put('/users/:id', (req, res) => {
    // CREO CONST PARA BUSCAR POR id 
    const {id} = req.params;
    // TRAEMOS CADA UNO DE LOS DATOS DE models user.js
    const { name, age, email} = req.body;

    userSchema

    //PARA ACTUALIZAR CADA DATO DE  USUARIOS EN BASE DATOS  $set guarda cada dato determinado  
    .updateOne({_id: id}, { $set: {name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    
});


// ELIMINAR USUARIO

router.delete('/users/:id', (req, res) => {
    // CREO CONST PARA BUSCAR POR id al eliminar
    const {id} = req.params;    

    userSchema

    //PARA ELIMINAR USUARIO EN BASE DATOS POR id  
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    
});




//EXPORTO EL router
module.exports = router;