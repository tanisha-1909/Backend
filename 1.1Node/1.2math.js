// module export

const sum=(a,b)=>{
    return a+b;
}

const mul=(a,b)=>{
    return a*b;
}

// module.exports=123;
// in another file
//const someValue= require("./math")

let obj={
    sum:sum,
    mul:mul
};
module.exports=obj;

// antoher way
module.exports.div=(a,b)=>{
    return a/b;
};