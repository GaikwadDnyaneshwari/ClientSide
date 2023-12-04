import express from "express";
import cors from"cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json())
 app.use(express.urlencoded())
app.use(cors())
const dbUri = "mongodb+srv://dnyaneshwari1997:dnyaneshwari10@cluster0.tzgqddw.mongodb.net/myLoginRegisterDB?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(dbUri).then(()=>{
 console.log("Database Connected to Server")
}).catch((err)=>{
    console.log(err)
})

//create shema

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
})


const User = new mongoose.model("User", userSchema)




//Routes

app.post("/login", (req, res)=> {
    const {email,password} = req.body
    User.findOne({email:email}, (err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Successful", user:user})
            }else{
                res.send({message: "pasaword didn't match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
});

app.post("/register", (req, res)=> {
  const {name,email,password} = req.body

  User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message: "user already registerd"})
    }
  })
  const user = new User({
    name, 
    email,
    password
  })
  user.save(err =>{
    if(err){
        res.send(err)
    }else {
        res.send({message: "Successfully Registered"})
    }
  })
})

app.listen(9002, ()=>{
    console.log("BE started at port 9002")
})