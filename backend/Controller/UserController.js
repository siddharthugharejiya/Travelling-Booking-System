 const bcrypt = require('bcryptjs')
 const singup = () =>{
    const {username,email,password}=req.body
    console.log(req.body);
     const hash = bcrypt.hash(password,10) 

 }

 module.exports = {singup}