const isAdmin = (req, res, next) => {
    console.log(req.user,'admin');
    if(req.user.role !== "admin"){
       return res.json({message: "you are not authorized"})
    }

    next()

}

module.exports = isAdmin; 