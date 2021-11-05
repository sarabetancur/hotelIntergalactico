const {Router}=require('express')


const { registrarHabitacion }=require('../controllers/controladorHabitaciones')
const { buscarHabitacion }=require('../controllers/controladorHabitaciones')
const { buscarHabitaciones }=require('../controllers/controladorHabitaciones')
const { editarHabitaciones }=require('../controllers/controladorHabitaciones')
const { eliminarHabitacion }=require('../controllers/controladorHabitaciones')


const { crearReserva }=require('../controllers/controladorReservas')
const { buscarReserva}=require('../controllers/controladorReservas')
const { buscarReservaciones }=require('../controllers/controladorReservas')
const { editarReservaciones }=require('../controllers/controladorReservas')
const { eliminarReservacion }=require('../controllers/controladorReservas')


const rutas=Router()

rutas.get('/avanzada/v1/habitaciones/:id',buscarHabitacion)
rutas.get('/avanzada/v1/habitaciones',buscarHabitaciones)
rutas.post('/avanzada/v1/habitaciones',registrarHabitacion)
rutas.put('/avanzada/v1/habitaciones/:id',editarHabitaciones)
rutas.delete('/avanzada/v1/habitaciones/:id',eliminarHabitacion)

rutas.get('/avanzada/v1/reservaciones/:id',buscarReserva)
rutas.get('/avanzada/v1/reservaciones',buscarReservaciones)
rutas.post('/avanzada/v1/reservaciones',crearReserva)
rutas.put('/avanzada/v1/reservacioness/:id',editarReservaciones)
rutas.delete('/avanzada/v1/reservaciones/:id',eliminarReservacion)


module.exports=rutas

