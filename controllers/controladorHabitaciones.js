const {request,response}=require('express')

const {insertarHabitacion}=require('../services/servicios.js')
const {leerHabitacion}=require('../services/servicios.js')
const {leerHabitaciones}=require('../services/servicios.js')
const {modificarHabitacion}=require('../services/servicios.js')
const {borrarHabitacion}=require('../services/servicios.js')


async function registrarHabitacion(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{

        await insertarHabitacion(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Éxito registrando habitación"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
        
    }

   
}

async function buscarHabitacion(peticion=request,respuesta=response){

    let id=peticion.params.id

   try{

    let habitacion= await leerHabitacion(id)
    respuesta.status(200).json({
        estado:true,
        datos: habitacion
        })

    }catch(error){
        respuesta.status(400).json({
        estado:false,
        mensaje:"...Upsss... "+error
        })
    
    }

}

async function buscarHabitaciones(peticion=request,respuesta=response){

    try{

        let habitaciones= await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos: habitaciones
            })
    
        }catch(error){
            respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss...  "+error
            })
        
        }

}

async function editarHabitaciones(peticion=request,respuesta=response){

    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarHabitacion(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"...Éxito editando la habitación..."
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss... "+error
        })
        
    }

}

async function eliminarHabitacion(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"...Éxito eliminando la Habitación..."
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss... "+error
        })
        
    }

}


module.exports={

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitaciones,
    eliminarHabitacion

}