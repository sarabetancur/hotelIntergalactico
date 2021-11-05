const {request,response}=require('express')

const {insertarReserva}=require('../services/servicios.js')
const {leerReserva}=require('../services/servicios.js')
const {leerReservas}=require('../services/servicios.js')
const {modificarReserva}=require('../services/servicios.js')
const {borrarReserva}=require('../services/servicios.js')


async function crearReserva(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{

        await insertarReserva(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Éxito creando la Reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
        
    }

   
}

async function buscarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{
 
     let reserva= await leerReserva(id)
     respuesta.status(200).json({
         estado:true,
         datos: reserva
         })
 
     }catch(error){
         respuesta.status(400).json({
         estado:false,
         mensaje:"...Upsss... "+error
         })
     
     }
    
}

async function buscarReservaciones(peticion=request,respuesta=response){

    try{

        let reservas= await leerReservas()
        respuesta.status(200).json({
            estado:true,
            datos: reservas
            })
    
        }catch(error){
            respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss...  "+error
            })
        
        }

}

async function editarReservaciones(peticion=request,respuesta=response){

    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarReserva(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"...Éxito editando la reservación..."
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss... "+error
        })
        
    }

}

async function eliminarReservacion(peticion=request,respuesta=response){

    
    let id=peticion.params.id

    try{

        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"...Éxito borrando la reserva..."
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"...Upsss... "+error
        })
        
    }

}


module.exports={

    crearReserva,
    buscarReserva,
    buscarReservaciones,
    editarReservaciones,
    eliminarReservacion

}