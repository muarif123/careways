const jwt  = require('jsonwebtoken');
const FailResponse = require('../utils/Failresponse');
const userSchema = require('../schemas/userSchema');
const checktoken = async(req,res,next)=>{
   
    try {
        var token = await req.headers.authorization.split(' ')[1]
        console.log(token,'tokenchecl');
        if(!token){
            res.status(200).json(new FailResponse,null,'User not logged In')
        }
        var response =  jwt.verify(token,process.env.SECRET_KEY)
        console.log(response);
        var users = await userSchema.findOne({_id:response.id})
        console.log(users);
        if(!users){
            res.status(200).json(new FailResponse,null,'User not Authorized')

        }
        req.user = users
        next()
        
        
    } catch (error) {
        
    }
}
module.exports = checktoken