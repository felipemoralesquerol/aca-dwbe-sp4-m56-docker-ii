require('dotenv').config({ debug: true });
// Vista de las variables de entorno
// console.log("Variables de entorno", process.env);

const mongoose = require('mongoose');


const express = require('express');

main().catch(err => console.log(err));

async function main() {
    const link = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}`;
    await mongoose.connect(link);
    console.log("Conectado a mongodb: " + link)
};


const app = express()

app.get('/', function (req, res) {
    console.log("Acceso a /");
    res.send('Prueba de docker-compose');
})

app.listen(process.env.NODE_DOCKER_PORT, (req, res) => {
    console.log("Inicio de express on port " + process.env.NODE_DOCKER_PORT);
})

