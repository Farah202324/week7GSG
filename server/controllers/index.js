"use strict";
require('dotenv').config()
const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const router = require("express").Router();

const error = require("./error");
const { route } = require("../app");


router.use(cookieParser())


router.post('/signUp', (req, res) => {
  jwt.sign(
    { id: 1 }, process.env.SECRET_KEY,  (err, token)=> {
      if(err){
  
res.status(500).json(
  {
  msg:'server error'
}
)
      }
      else{
        res.cookie('token',token)
       
      }
  
  });
 
})







router.get('/', (req, res) => {
  if(req.cookies.token){
    jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded)=>{
 
      if(err){
        res.clearCookie('token').status(401).send('Un Authorized')
      }
      
      else{
        res.status(200)
  
      }
          })
  }
  else{
    res.status(401).send('Not Auhonticated Please login')
  }
   

});



router.use(error.client);
router.use(error.server);

module.exports = router;
