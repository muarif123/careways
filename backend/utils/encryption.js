const bcrypt = require('bcrypt')
const encrypt = async(password)=>{
    var response = await bcrypt.hash(password,10)
    return response
}
module.exports = encrypt