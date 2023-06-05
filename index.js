
const express = require ("express");
const app = express();
const cors = require("cors")

//Puerto
const port = process.env.PORT || 4400; 

// Importacion de la variales de entorno 
require('dotenv').config();

//inportacion de la funcion MongoDB
const {bdConeccion} = require ("./server/src/models/db.js") 

// Invocacion de la funcion Coneccion de MongoDB
bdConeccion()

//Middlewers
app.use(express.json());
app.use(cors());

//Importacion de la ruta 
const rutasInventario = require("./server/src/routes/refacciones.js")


//Rutas
app.get('/',(req,res)=>{
    res.send('bienvenido a la API');
})

//Prefijo "API" a las rurasInventario
app.use("/API", rutasInventario)

app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`))