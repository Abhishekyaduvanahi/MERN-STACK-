const express =require('express'
);

const app = express();
const router = require('./Router/authRoter')

app.use(express.json());
const connectDB=require('./utils/db');

// to user router app.use("/api/auth", router);
app.use("/",router);

// app.get("/",(req,res)=>{
//   res.status(200).send("welcome hatcoder ");
// })

// app.get("/register",(req,res)=>{
//   res.status(200).send("welcome hatcoder to register page ");
// })

const PORT =5000;
connectDB().then(()=>{
  app.listen(PORT ,()=>{
    console.log(`Server is running at this ${PORT}`);
   });
});

