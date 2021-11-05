const {model,Schema}=require('mongoose')

const ReservaModelo=Schema({

    nombreCliente:{
        type:String,
        required:true
    },

    apellidoCliente:{
        type:String,
        required:true
    },

    telefonoCliente:{
        type:Number,
        required:true
    },

    fechaInicioReserva:{
        type:Date,
        required:true
    },

    fechaFinalReserva:{
        type:Date,
        required:true
    },

    numeroPersonas:{
        type:Number,
        required:true
    }
   
})

module.exports=model('reservasHotel',ReservaModelo)