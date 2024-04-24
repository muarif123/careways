const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { default: mongoose } = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.listen(2000,()=>{
    console.log('server is running');
})
const dotenv  = require('dotenv')
const userRouter = require('../Controls/User/userRoutes')
const adminRouter = require('../Controls/Admin/adminroutes')
const stripe = require('stripe')('sk_test_51P29mF08STO3etbHa2dcuFqI41w8576Nx0k4ENPsMZW0odWauRYzFsaSxd5GlW18YEf67HJiaI4ImBZQzieRjONB00GOcJ1lA4');

dotenv.config({path:'./.env'})
mongoose.connect(process.env.URL)
.then(()=>{
    console.log('database connected');
})
app.use('/api',userRouter)
app.use('/api',adminRouter)
app.post('/send-email', async (req, res) => {
    console.log(req.body,'recipients');
    const { to, subject, text } = req.body;
  
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Outlook SMTP server
        port: 587, // Outlook SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't have a certificate
        auth: {
          user: 'careways@hotmail.com',
          pass: 'Tahir@12345'
        }
      });
    
  
    try {
      await transporter.sendMail({
        from: 'careways@hotmail.com',
        to,
        subject,
        text
      });
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    }
  });

app.post("/api/create-checkout-session",async(req,res)=>{
  try {
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"pkr",
            product_data:{
                name:product.name,
                images:[product.image1, product.image2, product.image3]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));
 
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/Compo/success",
        cancel_url:"http://localhost:3000/Compo/cancel",
    });

    res.json({id:session.id})
  } catch (error) {
    console.log(error);
    
  }
   
 
})
