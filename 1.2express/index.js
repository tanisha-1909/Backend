// this file will act as server
const express= require("express");
const app= express();
// help to create server side web application
console.log(app);

// task1- listen to incoming request
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});

// listen to every type of request and give callback
// app.use((req,res)=>{
//     console.log("request received");
// });
// keeps loading
// app is listening to port 3000
// request received



// sending response

//--- use- to give response to every type of request
// app.use((req,res)=>{
//     console.log("request received");

//     // --text response
//     // res.send("hii tanisha!!");

//     // --json response
//     // res.send({
//     //     name:"tanisha",
//     //     age:"20"
//     // });

//     // -html response
//     res.send("<h1>Tanisha</h1>")
// });


// get-- for specific request->routing

app.get("/login",(req,res)=>{
    res.send("logged in!!");
});


// default case if any above path not got
app.get("*",(req,res)=>{
    res.send("wrong path");
})

app.post("/",(req,res)=>{
    res.send("you sent a post request to root");
})

app.post("*",(req,res)=>{
    res.send("wrong path h");
})