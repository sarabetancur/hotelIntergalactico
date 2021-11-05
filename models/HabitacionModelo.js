const {model,Schema}=require('mongoose')

const HabitacionModelo=Schema({

    nombreHabitacion:{
        type:String,
        required:true
    },

    fotoHabitacion:{
        type:String,
        required:true
    },

    descripcion:{
        type:String,
        required:true
    },

    precioAdultoXNoche:{
        type:Number,
        required:true
    },

    precioNinoXNoche:{
        type:Number,
        required:true
    }
   
})

module.exports=model('habitacionesHotel',HabitacionModelo)