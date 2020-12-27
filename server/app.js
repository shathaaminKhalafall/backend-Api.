const express=require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
 const app=express();
 app.use(cors());
 app.use(bodyParser.json());
 app.get('/user',(req,res)=>{
    res.json({name:req.query.name,message: "Welcome in my node page"});
})
app.post('/user/nariman',(req,res)=>{
    res.json({name:req.body.name , message:req.body.massage});
    
})
app.get('/user/nariman',(req,res)=>{
    res.json({message: "Welcome in my node page"});
})

// app.get('/shatha',(req,res)=>{
//     res.json({user:"shatha"});
// })
//  app.post('/nariman',(req,res)=>{
//      const data=req.body;
//      console.log(data);
//      res.json({success:true});
//  })
 app.listen(3000,()=>{
    console.log('server run');
});
