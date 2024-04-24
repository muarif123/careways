const Uploadfiles = require("../../utils/cloudinary");
const productSchema = require('../../schemas/productschema');
const carousel = require("../../schemas/carousel");
const cartschema = require("../../schemas/cartschema");
const userSchema = require("../../schemas/userSchema");
const uploadproduct = async(req,res)=>{
    
    // console.log(re);
    try {
        const image1 = await Uploadfiles(req.files.image1[0].path)
        const image2 = await Uploadfiles(req.files.image2[0].path)
        const image3 = await Uploadfiles(req.files.image3[0].path)

        var newobj = {
            name:req.body.name,
            price:req.body.price,
            category:req.body.category,
            description:req.body.description,
            image1:image1,
            image2:image2,
            image3:image3
        }
        var result = await productSchema.create(newobj)
        console.log(result);

        
        
        
    } catch (error) {
        
    }

}
const sendproducts = async(req,res)=>{
    try {
        var response = await productSchema.find({})
        res.json(response)
        
    } catch (error) {
        
    }
}
const getone = async(req,res)=>{
    try {
        var response = await productSchema.findById(req.params.id)
        res.json(response)

        
    } catch (error) {
        
    }
}
const updateproduct = async(req,res)=>{
    console.log(req.body,'body');
    
    try {
        
       
       
        var updatedobj = await productSchema.findOneAndUpdate({
            _id:req.params.id
        },{
            $set:req.body
        },{
            new : true
        })
        console.log(updatedobj);
        var result = await productSchema.find({})
        res.json(result)

        
    } catch (error) {
        console.log(error);
        
    }
}
const updateimg1 = async(req,res)=>{
    console.log(req.file);
    try {
        const image1 = await Uploadfiles(req.file.path)
        console.log(image1);
       
        var updatedobj = await productSchema.findOneAndUpdate({
            _id:req.params.id
        },{
            $set:{image1:image1}
        },{
            new : true
        })
        var result = await productSchema.find({})
        res.json(result)


        
    } catch (error) {
        
    }
}
const updateimg2 = async(req,res)=>{
    console.log(req.file);
    try {
        const image2 = await Uploadfiles(req.file.path)
        console.log(image2);
       
        var updatedobj = await productSchema.findOneAndUpdate({
            _id:req.params.id
        },{
            $set:{image2:image2}
        },{
            new : true
        })
        var result = await productSchema.find({})
        res.json(result)


        
    } catch (error) {
        
    }
}
const updateimg3 = async(req,res)=>{
    console.log(req.file);
    try {
        const image3 = await Uploadfiles(req.file.path)
        console.log(image3);
       
        var updatedobj = await productSchema.findOneAndUpdate({
            _id:req.params.id
        },{
            $set:{image3:image3}
        },{
            new : true
        })
        var result = await productSchema.find({})
        res.json(result)


        
    } catch (error) {
        
    }
}
const getcar = async(req,res)=>{
    console.log(req.file,'req.files');
    try {
        var response = await Uploadfiles(req.file.path)
        var newobj={
            carimage:response
        }
        var result = await carousel.create(newobj)
        console.log(result);
        
    } catch (error) {
        
    }
}
const sendcarousel = async(req,res)=>{
    try {
        var response = await carousel.find({})
        res.json(response)
        
    } catch (error) {
        
    }
}
const getonecr = async(req,res)=>{
    try {
        var response = await carousel.findById(req.params.id)
        res.json(response)

        
    } catch (error) {
        
    }
}
const editonecr = async(req,res)=>{
    console.log(req.file);
    try {
        const carimage = await Uploadfiles(req.file.path)
        const newobj = {
            carimage:carimage
        }
        var updatedobj = await carousel.findOneAndUpdate({
            _id:req.params.id
        },{
            $set:newobj
        },{
            new : true
        })
        var result = await carousel.find({})
        res.json(result)



        
    } catch (error) {
        console.log(error);
        
    }
}
const getorderdetail = async(req,res)=>{
    try {
        var response = await cartschema.find({user:req.params.id}).populate('user')
        res.json(response)
        
    } catch (error) {
        
    }
}
const senduserd = async(req,res)=>{
    try {
        var response = await userSchema.find({})
        res.json(response)
        
    } catch (error) {
        
    }
}
const updatestatus = async(req,res)=>{
    console.log(req.body);
    try {
        var response = await cartschema.updateMany({
            user:req.body.iet.user
        },
    {
        $set:{status:req.body.e}
    },
{
    new : true
}).populate('user')
res.json(response)
console.log(response,'updated');
        
    } catch (error) {
        
    }
}
const deletep = async(req,res)=>{
    try {
        var response = await productSchema.findOneAndDelete({_id:req.params.id})
        var  updated = await productSchema.find({})
        res.json(updated)
        
    } catch (error) {
        
    }
}
module.exports = {uploadproduct,sendproducts,getone,updateproduct,getcar,sendcarousel,getonecr,editonecr,getorderdetail,senduserd,updatestatus,deletep,updateimg1,updateimg2,updateimg3}