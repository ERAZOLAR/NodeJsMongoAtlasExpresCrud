// 1 CREO CONSTANTE LLAMANDO  A EXPRESS
const express = require('express');
// 6 CREO CONSTANTE LLAMANDO A MONGOOSE
const mongoose = require('mongoose')
// 8 TRAIGO DONTENV (variable de ambiente seguridad ingreso mongo atlas)
require ("dotenv").config();
// 9 TRAEMOS RUTAS de carpeta routes en archivo user.js
const userRoutes = require("./routes/user");

// 2 CREO OTRA CONSTANTE APP PARA LLAMAR CONST EXPRESS
const app = express();
// 3 CREAMOS CONST PORT PARA DETERMINAR NUMERO DE PUERTO, POR SI SE MODIFICA, o si logra comjn cinectatrse con 
//puerto 9000 o coge uno por defecto
const port = process.env.PORT || 9000;

// 10 CREO MIDDLEWARE QUE AGREGA api a cada ruta en archivo user.js en cada ruta con const userRoutes
// SE TRANSFORMAN  EN FORMATO JSON
app.use(express.json());
app.use('/api', userRoutes);


// 5 DEFINIMOS RUTAS, en pagina web localhost:9000    se ve "Bienvennido a la aplicacion"
app.get("/", (req, res) => {
    res.send("Bienvenido a la aplicacion");
});

// 7 SE REALIZA CONEXION A MONGODB ATLAS, se trae variable ambiente de archivo .env con ruta MONGODB_URI
// en caso de exito conexion cpn Mongpatlas o si se presenta error de conexion
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conexion con MongoAtlas'))
    .catch((error) => console.error(error));



// 4 DETERMINO PUERTO DE SALIDA E IMPRIMO PARA VALIDAR CONEXION y se reemplaza por port
app.listen(port, () => console.log('servidor activo en puerto', port));