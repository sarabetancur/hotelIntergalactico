const HabitacionModelo = require('../models/HabitacionModelo.js')
const ReservaModelo = require('../models/ReservaModelo.js')

async function insertarHabitacion(datosHabitacion){

    let habitacionAInsertar=new HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}

async function insertarReserva(datosReserva){

    let reservaAInsertar=new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

async function leerHabitacion(id){

    let habitacion=await HabitacionModelo.findById(id)
    return habitacion

}

async function leerReserva(id){

    let reserva=await ReservaModelo.findById(id)
    return reserva

}

async function leerHabitaciones(){
    let habitaciones=await HabitacionModelo.find()
    return habitaciones
}

async function leerReservas(){
    let reservas=await ReservaModelo.find()
    return reservas
}

async function modificarHabitacion(id,datos){

    return await HabitacionModelo.findByIdAndUpdate(id,datos)

}

async function modificarReserva(id,datos){

    return await ReservaModelo.findByIdAndUpdate(id,datos)

}

async function borrarHabitacion(id){

    return await HabitacionModelo.findByIdAndDelete(id)

}

async function borrarReserva(id){

    return await ReservaModelo.findByIdAndDelete(id)

}



module.exports={
    insertarHabitacion,insertarReserva,
    leerHabitacion,leerReserva,
    leerHabitaciones,leerReservas,
    modificarHabitacion,modificarReserva,
    borrarHabitacion,borrarReserva
}