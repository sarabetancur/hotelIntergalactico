require('dotenv').config()

const ServidorModelo = require('./models/ServidorModelo.js')

const servidorHI= new ServidorModelo();

servidorHI.despertarServidor()