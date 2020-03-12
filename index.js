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

const  myPersions =[
    {
        id:1,
        name:'Sundaram C',
        age:45
    },
    {
        id:2,
        name:'Vijayalakshmi S',
        age:26
    },
    {
        id:3,
        name:'Jai Amirthesh S',
        age:3
    }

]

//spcifiy the path
app.get('/',(req, res)=>{
res.status(200).json(myPersions)
})

app.get('/about',(req, res)=>{
    res.json('This is About  Page rendered ')
    })

//add port
app.listen('2000',()=>{
    console.log("Server started on port 2000 ")
})

//db server crreation
//mongoose.set(useNewUrlParser, true)
mongoose.connect('mongodb://localhost:27017/person',
{useNewUrlParser: true,useUnifiedTopology: true },
(err)=>{
   if(err) {console.log('Db not connected') }
   console.log('DB connected ') 
});