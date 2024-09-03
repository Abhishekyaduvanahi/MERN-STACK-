

const home =async (req,res)=>{
  try{
    res.status(200).send({ message: "registration page" });
  }
  catch(error){
   res.status(400).send("msg:error",error);

  }
}

const register =async (req,res)=>{
  try{
    res.status(200).send({ message: "registration page h bhai" });
  }
  catch(error){
   res.status(400).send("msg:error",error);

  }
}

module.exports={home,register}