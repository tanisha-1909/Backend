const express= require("express");
const app=express();

// console.log(app);

let port=3000;
app.listen(port,()=>{
    console.log("app is listening on port");
});
app.get("/", (req,res)=>{
    res.send("root path");
})
app.get("/apple", (req,res)=>{
    res.send("apple path");
});
app.get("/:username/:id", (req,res)=>{
    let {username,id}= req.params;
    console.log(req.params);
    res.send("hello!!!");
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("searched");
})
//http://localhost:3000/search?q=mango

app.get("*", (req,res)=>{
    res.send("path does not exist");
})

app.post("/", (req,res)=>{
    res.send("you sent post request");
})
app.use((req,res)=>{
    console.log("request received");
    let code="<h1>Tanisha Mahavar</h1>";
    res.send(code);
});



