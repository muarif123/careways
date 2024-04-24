const express  = require('express')
const checktoken = require('../../middleware/istoken')
const {uploadproduct,sendproducts, getone, updateproduct, getcar, sendcarousel, getonecr, editonecr, getorderdetail, senduserd, updatestatus, deletep, updateimg1, updateimg2, updateimg3} = require('./admincontrols')
const upload = require('../../middleware/multer')
const isAdmin = require('../../middleware/isadmin')
const adminRouter  = express.Router()
adminRouter.post('/productinfo',checktoken,isAdmin,upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]),uploadproduct)
adminRouter.get('/getproductinfo',sendproducts)
adminRouter.get('/getone/:id',getone)

adminRouter.put('/updateproduct/:id',checktoken,isAdmin,updateproduct)
adminRouter.put('/updateimage1/:id',checktoken,isAdmin,upload.single('image1'),updateimg1)
adminRouter.put('/updateimage2/:id',checktoken,isAdmin,upload.single('image2'),updateimg2)
adminRouter.put('/updateimage3/:id',checktoken,isAdmin,upload.single('image3'),updateimg3)

adminRouter.post('/sendcar',upload.single('carimage'),getcar)
adminRouter.get('/sendcarousels',sendcarousel)
adminRouter.get('/getonecar/:id',getonecr)
adminRouter.put('/geteditcar/:id',upload.single('carimage'),editonecr)
adminRouter.get('/getorderd/:id',getorderdetail)
adminRouter.get('/getuserinfos',senduserd)
adminRouter.put('/updatestat',updatestatus)
adminRouter.post('/deleteproduc/:id',deletep)





module.exports = adminRouter