const express= require('express')
const app=express();

// defining middleware function
// website will buffer because next steps are not mentioned
// app.use(()=>{
//     console.log("I am middlware");
// })


// req,res with middlwware
// this middlware is getting used for all routes
app.use((req,res)=>{
    let {query}= req.query;
    // http://localhost:3000/test?query=%tanisha%
    // "tanisha
    console.log(query);

    console.log("middlware working");
    res.send("I am middleware");
})

app.listen("3000",()=>{
    console.log("server listening to port");
})

app.get("/", (req,res)=>{
    res.send("I am root");
})

app.get("/test" , (req,res)=>{
    res.send("this is test page");
})