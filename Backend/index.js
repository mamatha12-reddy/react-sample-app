const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
let token
const generateToken=()=>{
   token=jwt.sign({name:'mamatha'},'secreat',{expiresIn:30})
  console.log("the token====",token)
  const decode=jwt.verify(token,'secreat')
  console.log("the decode====!!!!!!!!!!!!",decode)
}


app.get('/',(req,res)=>{
  console.log("homeroute==*****)))))",req.path)
  res.send({one:'one'})
  generateToken()
})

app.post('/user/:id',async(req,res)=>{
  
  //const bodyObj=JSON.parse(req.body)
  
  const generateSalt=await bcrypt.genSalt(10)
  const password= await bcrypt.hash(req.body.name,generateSalt)
  
  const comparePass= await bcrypt.compare('mamatha',password)
  console.log("password hashing===",comparePass)
  
  res.send({status:"OK",token:token,password:comparePass,name:req.body.name,age:req.body.age})
})

app.listen(4005,()=>{
  console.log("server atrted===")
})