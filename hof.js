// HIGHER ORDER FUNCTION
//  let numbers= [1,2,3];
//  const doSquare = function(){
//     let results=[];
//     for (let v of numbers){
//         results.push(v*v);
//     }
//     return results;
//  };
//  const doCube= function(){
//     let results=[];
//     for (let v of numbers){
//         results.push(v*v*v);
//     }
//     return results;
//  };
//  console.log(doCube());

// EXAMPLE:2
// let numbers= [1,2,3];
//  const doSquare= (v)=> v*v;
//  const doCube= (v)=> v*v*v;
//  const doSquareRoot= (v)=> Math.sqrt(v);

//  const calculate= function(logic){
//     let results= [];
// for (let v of numbers){
//     results.push(logic(v));
// }
// return results;
//  };
//  console.log(calculate(doSquareRoot));

// Inbuilt HOF functions
// 1.for each
// let numbers=[1,2,3];
// numbers.forEach(function(value,index,array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });
// 2.map
// let colors=["red","green","blue"];
// let transformedData=colors.map(function(value,index,array){
//     return `<p>${value}</p>`;
// });
// transformedData;
// 3.filter
//  let canVote=[23,25,26,10,5];
//  canVote.filter(function(value){
// if(value>=16) return true;
// else return false;
//  });
// let f=canVote.filter((value)=>(value>=16 ? true : false));
// console.log(f);
// let f=canVote.filter(value)=>(value>=16?true :false);
let stdmarks=[50,60,100,30]
d=stdmarks.filter((value)=>(value>=40? true: false));
console.log(d);