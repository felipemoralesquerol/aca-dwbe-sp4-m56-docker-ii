require('dotenv').config();
// Vista de las variables de entorno
// console.log("Variables de entorno", process.env);

const mongoose = require('mongoose');


const express = require('express');

async function registerAccess(db) {
    const accessSchema = await new mongoose.Schema({ date: Date, action: String });
    const accessModel = await db.model('userlists', accessSchema);
    const access = await new accessModel({ date: Date.now(), action: 'Access' });

    const salida = ""
    access.save(function (err, docs) {
        if (err) {
            console.log('Error');
            return "Error"
        } else {
            accessModel.countDocuments({}, function (err, c) {
                salida = 'Count is ' + c
                console.log(salida);
                return salida
            });
        }
    });
};
async function main() {
    const link = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}`;
    console.log(link)
    const db = await mongoose.connect(link);
    console.log("Conectado a mongodb")
    return db

};

const db = main().catch(err => console.log(err));

const app = express()

app.get('/', async function (req, res) {

    const resultado = await registerAccess(db);

    console.log("Acceso a /" + resultado);
    res.send('Prueba de docker-compose ' + resultado);
})

app.listen(process.env.NODE_DOCKER_PORT, (req, res) => {
    console.log("Inicio de express on port " + process.env.NODE_DOCKER_PORT);
})

