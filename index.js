const express = require('express');
const app=express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//miidleware  
//app.use((req,res,next) =>{
//    console.log('Middleware passing with different rendered page')
 //   next()
//})
app.use(morgan('dev'))

//spcifiy the path
app.get('/',(req, res)=>{
res.json('This is first Express Page ')
})

app.get('/about',(req, res)=>{
    res.json('This is About  Page rendered ')
    })

//add port
app.listen('2000',()=>{
    console.log("Server started on port 2000 ")
})

//db server crreation
mongoose.set(useNewUrlParser= true)
mongoose.connect('mongodb://localhost:27017/person',(err)=>{
   if(err) {console.log('Db not connected') }
   console.log('DB connected ') 
});