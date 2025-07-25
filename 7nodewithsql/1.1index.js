const { faker } = require("@faker-js/faker");

// to get client
const mysql= require("mysql2");

// create connection to database
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"myapp",
    password:"tanisha",
});

// let q="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
let user=['123',"123_newuser","abc@gmail","abc"];

// for multiple
let q="INSERT INTO user(id,username,email,password) VALUES ?";
let multiple=[
    ['126',"124_neweuser","sd@gwmail","sd"],
    ['129',"1245_newewuser","absac@gmawil","axsbc"],
];
try{
    connection.query(q,[multiple],(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result[0]);
    })
}catch(err){
    console.log(err);
}

// 

connection.end();

// to fetch fake data
let getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), 
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
  
  console.log(getRandomUser());

