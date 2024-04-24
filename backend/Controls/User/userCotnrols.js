

const productSchema = require('../../schemas/productschema')

const { default: mongoose } = require("mongoose")
const encrypt = require("../../utils/encryption");
const userSchema = require("../../schemas/userSchema");
const genToken = require("../../utils/token");
const matchpass = require("../../utils/compare");
const ApiResponse = require("../../utils/APIresponse");
const FailResponse = require("../../utils/Failresponse");
const cartschema = require('../../schemas/cartschema');
const Sendmail = require('../../utils/linksend');

const signup = async(req,res)=>{
    try {
        var encPassword = await encrypt(req.body.password)
        console.log(encPassword);
        req.body.password = encPassword
        var result = await userSchema.create(req.body)
        console.log(result);

        
    } catch (error) {
        
    }
    
}
const login = async(req,res)=>{
    try {
        var response = await userSchema.findOne({email:req.body.email})
        if(!response){
            res.status(200).json(new FailResponse(404,null,'User not found'))

        }
        var iscorrect = await matchpass(req.body.password,response.password)
        if(!iscorrect){
            res.status(200).json(new FailResponse(401,null,'Incorrect Password'))

        }
        var token = await genToken(response._id)
        if(token){
            res.status(200).json(new ApiResponse(200,{response,token},'Login Succesfully'))
        }
        
    } catch (error) {
        
    }
}
const addcart = async (req, res) => {
    console.log(req.user);
    
    try {
        
        var obj = {
            user: req.user,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image1: req.body.image1,
            image2: req.body.image2,
            image3: req.body.image3,
            description: req.body.description,
            quantity: req.body.quantity,
            product: req.body._id,
            
            
        }
        const usercartitems = await cartschema.find({user:req.user._id,product:req.body._id})
        // console.log(usercartitems);
        if(usercartitems.length>0){
           
            console.log('if');
                usercartitems[0].quantity+=req.body.quantity
                await usercartitems[0].save()
            
          
        }
       else{
            console.log('else');
            await cartschema.create(obj)
       }

        
    } catch (error) {
        console.log(error);
    }
}

        // Get the user ID from req.user
       








const sendcart = async(req,res)=>{
   

    

    try {
        var response = await cartschema.find({}).populate('user')
       
       var result = await cartschema.find({user:req.params.id}).populate('user')
        
       res.json(result)
    } catch (error) {
        
    }
}

const deletecart = async(req,res)=>{
    console.log(req.params.id);
    try {
   
    var result = await cartschema.deleteMany({user:req.params.id}).populate('user')
    res.json(result)
        
    } catch (error) {
        
    }
}
const sendcart2 = async(req,res)=>{
    try {
        var response = await cartschema.find({}).populate('user')
        res.json(response)
        
    } catch (error) {
        
    }
}
const deletion = async(req,res)=>{
    console.log(req.params.id);
    try {
        var response = await cartschema.findOneAndDelete({_id:req.params.id})
        var  updated = await cartschema.find({})
        res.json(updated)
       

        
    } catch (error) {
        
    }
}
const changepass = async(req,res)=>{
    
    try {
        var response = await matchpass(req.body.oldpass,req.user.password)
        if(!response){
            res.status(200).json(new FailResponse(401,null,'Invalid Old Password'))
        }
        var newpass = await encrypt(req.body.newpass)
        var changepass = await userSchema.findOneAndUpdate({
            _id:req.user._id
        },
    {
        $set:{password:newpass}
    },
{
    new : true
})
 if(changepass){
    res.status(200).json(new ApiResponse(200,{},'Password Updated Successfully'))
 }
console.log(result,'password updated');
     
        
    } catch (error) {
        
    }
}
// const sendlink = async(req,res)=>{
//     try {
//         var response = await userSchema.findOne({email:req.body.email})
//         if(!response){
//             res.status(200).json(new FailResponse(404,null,'User not found'))

//         }
//         var link = await Sendmail(response)
       
       
        
//         res.json({result})
        
//     } catch (error) {
        
//     }
// }
const changepass2 = async(req,res)=>{
    
    var newpas = await encrypt(req.body.newpass)
    try {
        var response = await userSchema.findOneAndUpdate({
            email:req.body.email
        },{
            $set:{password:newpas}
        },
    {
        new:true

    })
    console.log(response);

    if(!response){
        res.status(200).json(new FailResponse(404,null,'Verification failed'))
    }
    else{
        res.status(200).json(new ApiResponse(200,null,'Password Updated Successfully'))
    }

     
        
    } catch (error) {
        
    }
}
const getdetail = async(req,res)=>{
    try {
        var response = await productSchema.findById(req.params.id)
        var updated = []
        updated.push(response)
        res.json(updated)
        
    } catch (error) {
        
    }
}
// const sendquery = async(req,res)=>{
//     console.log(req.params.id,'query');
//     try {
//         var categories = await productSchema.find({category:req.params.id})
        
//         console.log(categories,'query objects');
//         var names = await productSchema.find({name:{$regex:new RegExp(req.params.id,'i')}})
//         //new RegExp(inputValue, 'i'): This constructs a new JavaScript regular expression object using the RegExp constructor. The first argument (inputValue) is the pattern to match, and the second argument ('i') is an optional flag indicating that the search should be case-insensitive ('i' stands for case-insensitive).

// //inputValue: This is the value provided by the user, which serves as the pattern to match in the name field of the documents in the MongoDB collection.

// //'i' (optional flag): This flag makes the regular expression case-insensitive, meaning it will match both uppercase and lowercase characters
//         if(names.length===0){
//             res.status(200).json(new FailResponse,(404,null,'Unable to find this item'))

//         }
//         console.log(names,'names');
//         var response = [...categories,...names]
//         res.json(response)

        
//     } catch (error) {
        
//     }
// }
// const sendquery = async (req, res) => {
//     try {
//         // Split the search query into individual words
//         const searchWords = req.params.id.split(' ');

//         // Array to hold results
//         let results = [];

//         // Iterate over each word and perform search
//         for (const word of searchWords) {
//             // Search products by category
//             const category = await productSchema.find({ category: word });

//             // Search products by name
//             const name = await productSchema.find({ name: { $regex: new RegExp(word, 'i') } });

//             // Combine results from category and name searches
//             results = results.concat(category, name);
//         }

//         // Remove duplicate results
        
//         console.log(results);
//         // Send the response with the unique results
//         res.json(results);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, code: 500, message: 'Internal Server Error' });
//     }
// };
const sendquery = async(req,res)=>{
    try {
        var inputvalue = req.params.id.split(' ')
        console.log(inputvalue);
        var results = []
        let words;
        for(words of inputvalue){
            var category = await productSchema.find({category:words})
            var names = await productSchema.find({name:{$regex:new RegExp(words,'i')}})
            results = results.concat(category,names)
        }
        if(results.length===0){
            res.status(200).json(new FailResponse(404,null,`There are no products that match "${words}"`))
            
        }
        console.log(results);
        res.json(results)
        
    } catch (error) {

        
    }
}
const sendcat = async(req,res)=>{
    try {
        var response = await productSchema.find({category:req.params.id})
        res.json(response)

        
    } catch (error) {
        
    }
}
const sendrel = async(req,res)=>{
  
    
    try {
        var response = await productSchema.find({_id:req.params.id})
        console.log(response);
        var result = await productSchema.find({category:response[0].category})

        res.json(result)

        
    } catch (error) {
        console.log(error);
        
    }

}


module.exports = {signup,login,addcart,sendcart,deletion,changepass,changepass2,getdetail,sendquery,sendcat,sendrel,sendcart2,deletecart}