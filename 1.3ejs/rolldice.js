const express= require("express");
const app= express();
const path=require("path");

const port=3000;
app.listen(port,()=>{
    console.log("listening to port ");
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/rolldice",(req,res)=>{
    // if want to take value from database (assuming value = coming from database)
    let value=Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs", {value});
})