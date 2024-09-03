const express = require('express'
);
const router =express.Router();

const authControllers=require("./controllers/authController")

// router.get("/",(req,res)=>{
//   res.status(200).send("welcome hatcoder used router ");
// })

router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register
);

// router.route("/").get((req,res)=>{
//   res.status(200).send("welcome hatcoder used router ");
// })


module.exports=router;