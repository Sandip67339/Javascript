console.log(document.body);
let div = document.getElementById("hero-section");
div.innerHTML="Hello";

const paragraphs= document.getElementsByClassName("para")[2];
paragraphs.innerHTML="<b>changed</b>";

const colorlist=["red","green","blue"];
const btn = document.getElementById("my-button")
function changeBg(){
    let index =(Math.floor(Math.random() * colorlist.length));
    document.body.bgcolor = colorslist[index];
}