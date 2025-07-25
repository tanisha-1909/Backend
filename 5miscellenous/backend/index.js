const express= require("express");
const app=express();
const port=3000;

// parsing for post request using middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(port,()=>{
    console.log("port is listening");
})

app.get("/register",(req,res)=>{
    let {user,password}= req.query;
    res.send(`success ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}= req.body;
    console.log(req.body);
    res.send(`success  ${user} `);
})