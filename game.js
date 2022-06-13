const w = document.querySelector('#canvas');
let height = w.getAttribute('height');
let width  = w.getAttribute('width'); 
var color1 = "blue";
var color2 = "red";
var color3 = "yellow";

var x1 = 300;
var y1 = 150;
let x2 = 200;
let y2 = 300;
let x3 = 400;
let y3 = 200;


let radius1 = 50;
let radius2 = 50;
let radius3 = 50;

let multi1 = 1;
let multi2 = 1;
let multi11 = 1;
let multi22 = 1;
let multi111 = 1;
let multi222 = 1;

let bottom = height - radius2;
let Top = radius2;
let left = radius2;
let right = width - radius2;
let bottom1 = height - radius2;
let Top1 = radius2;
let left1 = radius2;
let right1 = width - radius2;



function windowload(){
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');



context.beginPath();
context.clearRect(0,0,10000, 6000);
context.arc(x1, y1, radius1, 0, 360, false);
context.fillStyle = color1;
context.fill();
context.stroke();



context.beginPath();
context.clearRect(0,0,00, 00);
context.arc(x2, y2, radius2, 0, 360, false);
context.fillStyle = color2;
context.fill();
context.stroke();

context.beginPath();
context.clearRect(0,0,00, 00);
context.arc(x3, y3, radius2, 0, 360, false);
context.fillStyle = color3;
context.fill();
context.stroke();


if(y2 >= bottom ){
     multi1 *= -1;
}
if(y1 >= bottom1){
     multi11 *= -1;
}
if(y3 >= bottom1){
     multi111 *= -1;
}

if(y2 <= Top ){
     multi1 *= -1;
}
if(y1 <= Top1){
     multi11 *= -1;
}
if(y3 <= Top1){
     multi111 *= -1;
}

if(x2 >= right ){
     multi2 *= -1;
}
if(x1 >= right1){
     multi22 *= -1;
}
if(x3 >= right1){
     multi222 *= -1;
}

if(x2 <= left ){
     multi2 *= -1;
}
if(x1 <= left1){
     multi22 *= -1;
}
if(x3 <= left1){
     multi222 *= -1;
}

x2 += 5 * multi2;
y2 += 8 * multi1;     

x1 += 9 * multi22;
y1 += 8 * multi11;     

x3 += 6 * multi222;
y3 += 8 * multi111;

function getDistance(){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
   
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow
    (yDistance, 2));
}

function getDistance1(){
     let xDistance1 = x3 - x2;
     let yDistance1 = y3 - y2;
    
     return Math.sqrt(Math.pow(xDistance1, 2) + Math.pow
     (yDistance1, 2));
 }

 function getDistance11(){
     let xDistance11 = x3 - x1;
     let yDistance11 = y3 - y1;
    
     return Math.sqrt(Math.pow(xDistance11, 2) + Math.pow
     (yDistance11, 2));
 }

if (getDistance() < radius1 + radius2){
     color1 ="green";
} else{
     color1 = "blue";
}


if (getDistance1() < radius3 + radius2){
     color2 ="black";
}else{
     color2 ="red";
}

if (getDistance11() < radius3 + radius1){
     color3 ="white";
} else{
     color3 = "yellow";
}


}




//document.addEventListener("mouseover", windowload);
setInterval(windowload, 3)



