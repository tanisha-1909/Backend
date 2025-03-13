const express= require("express");
const app= express();
const path= require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const port=3000;
app.listen(port,()=>{
    console.log(`listening port no . ${port}`);
})
app.get("/",(req,res)=>{
    res.send("you are on home page");
})
app.get("/ig/:username",(req,res)=>{
    const followers=['adam','steve','bob','herry'];
    let {username}=req.params;
    res.render("home.ejs",{username,followers});
})