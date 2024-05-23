const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://joychoi0102:joychoi1004@LoginSignupTutorial/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

//schema
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//collection
const collection=new mongoose.model("Collection1", LogInSchema)
module.exports=collection