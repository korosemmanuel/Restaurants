const express= require('express');
const mongoose= require('mongoose');
const app = express();

const uri="mongodb+srv://emmanuelkoros:E37849323k@cluster0.bbuiewe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connect(){
 try{
     await mongoose.connect(uri);
     console.log("connection successful")
 }
 catch(error){
     console.log(error)
 }
}

connect();
   //port connection
app.listen(6000,() =>{
   console.log('db connect to port 6000')
})

