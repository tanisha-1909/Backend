const express= require("express");
const app= express();
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});


app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("success");
})