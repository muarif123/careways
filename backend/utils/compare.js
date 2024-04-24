const bcrypt = require('bcrypt')
const matchpass = async(password,encPassword)=>{
    try {
        var response = await bcrypt.compare(password,encPassword)
        return response
        
    } catch (error) {
        
    }

}
module.exports = matchpass