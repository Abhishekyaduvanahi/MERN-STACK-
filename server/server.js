const express =require('express'
);

const app = express();

app.get("/",(req,res)=>{
  res.status(200).send("welcome hatcoder ");
})

app.get("/register",(req,res)=>{
  res.status(200).send("welcome hatcoder to register page ");
})

const PORT =5000;

app.listen(PORT ,()=>{
 console.log(`Server is running at this ${PORT}`);
})