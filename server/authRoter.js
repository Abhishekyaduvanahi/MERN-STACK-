const express = require('express'
);
const router =express.Router();

router.get("/",(req,res)=>{
  res.status(200).send("welcome hatcoder used router ");
})

router.route("/").get((req,res)=>{
  res.status(200).send("welcome hatcoder used router ");
})


module.exports=router;