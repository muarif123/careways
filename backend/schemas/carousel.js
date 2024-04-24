const { default: mongoose } = require("mongoose");

const Carousel = new mongoose.Schema({
    carimage:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Carousel',Carousel)