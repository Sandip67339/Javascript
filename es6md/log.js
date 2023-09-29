// log
console.log("abc");
// error
console.error("wro");
// warn
console.warn("swo");
// info
// table
const product list= [{name:"pen bucket",cost:50 },{ name:"copy", cost:100},];
// group(),groupEnd()
console.group("For loop data");
for(let i=0; i<10;i++){
    console.log(i);
}
console.groupEnd();
// time(),timeEnd()
console.time("timer");
for(let i=0;i>10;i++){
    console.log(i);
}
console.timeEnd("end");