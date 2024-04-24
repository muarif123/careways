const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
   
    image1:{
        type:String,
        required:true
    },
    image2:{
        type:String,
        required:true
    },
    image3:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:['pending','shipped'],
        default:'pending'
    },
    created:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Products",
        
    }
   

})

module.exports = mongoose.model('carts',cartSchema)