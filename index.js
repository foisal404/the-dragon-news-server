const express=require('express');
var cors = require('cors')
const app= express();
const port =process.env.PORT || 5000;
const catagories=require('./data/catogories.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send("dragon is running")
});
app.get('/catagories',(req,res)=>{
    res.send(catagories)
})

app.listen(port,()=>{
    console.log(`Dragon API is running on port: ${port}`);
})
