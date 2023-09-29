//function
// function add(a,b){
//     let a=1;
//    let b=2;
//    console.log(a+b);}  

// add(1,20);

//alternative way
//let add=new Function("console.log('hi');");
// add();

//calling tecnique
// function add(a,b){
//     console.log(a+b);
//     add.call(add,1,2);
// }

// function add(a,b, ...rest){
//     let a=1;
//     let b=2;
// console.log(rest);
// return 10.2;}

// add(1,20,30,40);
// let printer={
//     log(...data){
//         console.log(...data);
//     },
// };
// printer.log("sar","23","live","chat");

// function student(a,b,[ ...rest]){
// console.log(rest);
// }
// student("a","b",["c","d","e"]);

//RECURSIVE FUNCTION-
// TO CALCULATE FACTORIAL,FIBONNACI 

// function factorial(n){
// if(n===0){
//     return 1;
// }else{
//     return n*factorial(n-1);
// }
// }
// const result=factorial(5);
// console.log(result);

// ARROW FUNCTION
// function add(a,b) {
//     return a+b;
// }
// let addingfunction=(a,b) => a+b;
// console.log(addingfunction(1,2));

function outer(){
    console.log("outer");
    function inner(){}
}
console.log(outer()); 