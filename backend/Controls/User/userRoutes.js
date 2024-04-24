const express = require('express')
const {signup,login, addcart, sendcart, deletion, changepass, sendlink, changepass2, getdetail, sendquery, sendcat, sorter, sendrel, sendcart2, deletecart} = require('./userCotnrols')
const checktoken = require('../../middleware/istoken')


const userRouter = express.Router()
userRouter.post('/signupinfo',signup)
userRouter.post('/logininfo',login)
userRouter.post('/addcart',checktoken,addcart)
userRouter.get('/getcartpr/:id',sendcart)
userRouter.get('/clearcartpr/:id',deletecart)

userRouter.get('/getcartotal',sendcart2)

userRouter.post('/deletes/:id',checktoken,deletion)
userRouter.post('/changepas',checktoken,changepass)
// userRouter.post('/passmail',sendlink)
userRouter.put('/updatepasser',changepass2)
userRouter.get('/getonedetail/:id',getdetail)
userRouter.get('/getquery/:id',sendquery)
userRouter.get('/getcateg/:id',sendcat)
userRouter.get('/getcatego/:id',sendrel)







module.exports = userRouter