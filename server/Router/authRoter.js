const express = require('express'
);
const router =express.Router();
const User = require("../model/userModel")

const authControllers=require("../controllers/authController")


// router.get("/",(req,res)=>{
//   res.status(200).send("welcome hatcoder used router ");
// })

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register
);

// router.route("/").get((req,res)=>{
//   res.status(200).send("welcome hatcoder used router ");
// })


module.exports=router;