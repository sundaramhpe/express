const express = require('express');
const app=express();

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
