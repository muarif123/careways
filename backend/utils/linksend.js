const nodemailer = require('nodemailer');
const genToken = require('./token');
const Sendmail = async(user)=>{
  console.log(user,'info');
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Outlook SMTP server
        port: 587, // Outlook SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't have a certificate
        auth: {
          user: 'careways@hotmail.com',
          pass: 'Tahir@12345'
        }
      });
          var token = await genToken(user._id)
          
          var link = `http://localhost:3000/Compo/newpassword/${token}`
          console.log(link);
         
          const info = await transporter.sendMail({
            from: 'careways@hotmail.com', // sender address
            to: user.email, // list of receivers
            subject: "Forget Your Password", // Subject line
            text: `click here to set new password ${link}`, // plain text body
          });
          console.log(info,'linkinfo');
          if(info){
            return info.text
          }

        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = Sendmail