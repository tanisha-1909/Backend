const express=require("express");
const app= express();

const port=3000;
app.listen(port,()=>{
    console.log("port is listening !")
});

app.get("/:username",(req,res)=>{
    // console.log(req.params);
    res.send("helooo!!");
})

// {username:'tanishamahavar'}

// --mutiple parameter
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username,id}= req.params;
    res.send(`hello!! ${username} your id is ${id}`);
})


