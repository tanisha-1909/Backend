const express= require('express');
const app=express();
const path= require("path");
const faker= require('@faker-js/faker');
const mysql= require('mysql2');
const methodOverride= require('method-override');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.listen("8000",()=>{
    console.log("server is listening");
});

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"myapp",
    password:"tanisha"
});

app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            // res.send(`SUCCESS! Total no. of users are ${result[0]["count(*)"]}`);
            res.render("home.ejs",{count});
        })
    }catch(err){
        console.log(err);
        res.send("error in db");
    }
})


app.get("/user",(req,res)=>{
    let q="SELECT * FROM USER";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result;
            res.render("user.ejs",{data});
        })
    }catch(err){
        console.log(err);
        res.send("failed in fetching data");
    }
})

// edit
app.get("/user/:id/edit",(req,res)=>{
    let {id}= req.params;
    let q= `SELECT * FROM USER WHERE id=?`;
    try{
        connection.query(q,[id],(err,result)=>{
            if(err) throw err;
            let person=result[0];
            res.render("edit.ejs",{person});
        })
    }catch(err){
        console.log(err);
        res.send("fail");
    }
})



// update route
app.patch("/user/:id",(req,res)=>{
    let {id}= req.params;
    let { password:formpass,username:newusername}=req.body;
    let q= `SELECT * FROM USER WHERE ID='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user= result[0];
            console.log(formpass);
            if(formpass== user.password){
                let q2= `UPDATE USER SET username='${newusername}' where id='${id}'`;
                try{
                    connection.query(q2,(err,result)=>{
                        if(err) throw err;
                        res.redirect("/user");
                })}catch(err){
                    console.log(err);
                }
            }
            else res.send("incorrect password");
        })
    }catch(err){
        console.log(err);
        res.send("Updation failed");
    }
})


let getrandomuser=()=>{
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};
// let user_array=[];
// for(let i=1;i<=100;i++){
//     user_array.push(getrandomuser());
// }
// let q="INSERT INTO user (id,username,email,password) VALUES ?";
// try{
//     connection.query(q,[user_array],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }