const express = require('express');
const app=express();

//miidleware  
app.use((req,res,next) =>{
    console.log('Middleware passing with different rendered page')
    next()
})

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
