const jwt = require('jsonwebtoken')
const genToken = async(id)=>{
    try {
        var response = await jwt.sign({id:id},process.env.SECRET_KEY,{expiresIn:"5d"})
       
        return response
        
    } catch (error) {
        
    }

}
module.exports = genToken