const express= require("express");
const app=express();

// to run server from backend folder
const path= require("path");
app.set("views", path.join(__dirname,"/views"));

const port=3000;
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("port is listening");
})

app.get("/",(req,res)=>{
    // res.send("home page");
    res.render("home.ejs"); //file 
    // always directory name "views" (internal structure)
});