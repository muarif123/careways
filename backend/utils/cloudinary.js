const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'diksmyvyt', 
    api_key: '426218292947423', 
    api_secret: 'OO4WS-bejwzfPc_QqssMHCInLoA' 
  });
const Uploadfiles = async(filepath)=>{
    try {
        var files = await cloudinary.uploader.upload(filepath)
        console.log(files.secure_url,'images');
        if(files){
            return files.secure_url
        }
        
    } catch (error) {
        
    }
}
module.exports = Uploadfiles