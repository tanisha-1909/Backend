const {faker}= require('@faker-js/faker');
const mysql= require('mysql2');

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"myapp",
    password:"tanisha",
});

let randomuser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
};

let user_array=[];
for(let i=1;i<=100;i++){
    user_array.push(randomuser());
}
let q="INSERT INTO user(id,username,email,password) VALUES ?";
try{
    connection.query(q,[user_array],(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
    })
}catch(err){
    console.log(err);
}
connection.end();