const express= require('express')
const app=express();

// defining middleware function
// website will buffer because next steps are not mentioned
// app.use(()=>{
//     console.log("I am middlware");
// })


// req,res with middlwware
// this middlware is getting used for all routes
// app.use((req,res)=>{
//     let {query}= req.query;
//     // http://localhost:3000/test?query=%tanisha%
//     // "tanisha
//     console.log(query);

//     console.log("middlware working");
//     res.send("I am middleware");
// })

// ----------------middlware stack execution  using next
// next() in middleware passes control to the next middleware function in the request-response cycle.
// app.use((req,res,next)=>{
//     console.log("middleware 1")
//     next();
//     console.log("backtrack");
//     // not a good practice though
// });

// app.use((req,res,next)=>{
//     console.log("middleware 2")
//     next();
// })

// o/p
// middleware 1
// middleware 2
// backtrack

// -------------------------


// --------utility middleware(logger)
// app.use((req,res,next)=>{
//     console.log(req.method, req.hostname , req.path);
//     next();
// })
// GET localhost / (o/p)
// ------------

// ------------middleware for specific route
app.use("/test", (req,res,next)=>{
    console.log("only for test")
    next();
});

//---------------- api token as query string
// http://localhost:3000/api?token=giveaccess
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }
    else res.send("ACCESS DENIED");
})

app.listen("3000",()=>{
    console.log("server listening to port");
});

app.get("/", (req,res)=>{
    res.send("I am root");
});

app.get("/test" , (req,res)=>{
    res.send("this is test page");
})

app.get("/api", (req,res)=>{
    res.send("data");
} )
// 404
app.use((req,res)=>{
    res.status(404).send("Page Not found");
})


// passing middleware as function

const checktoken=(req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }
    else res.send("ACCESS DENIED");
}

app.get("/api",checktoken, (req,res)=>{
    res.send("data");
} )