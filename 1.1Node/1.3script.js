let n=5;

for(let i=0;i<n;i++){
    console.log("heelo",i);
}

console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',  //executable node path
//   'C:\\Users\\Tanisha\\Desktop\\Backend\\Node\\script.js' //current file path
// ]

// const someValue= require("./math"); //receiving from module.export
// console.log(someValue);
// 123


const math=require("./math");
console.log(math);
// { sum: [Function: sum], mul: [Function: mul] }

console.log(math.mul(2,3));
//6

console.log(math.div(6,3));
// 2

// from file of different folder
const another_file=require("../../../temp/temp");

console.log(another_file);
// { name: 'taanisha', age: '18' }


