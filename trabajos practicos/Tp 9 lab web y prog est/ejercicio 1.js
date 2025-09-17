var sal=document.getElementById("1000");



function sumar (){
var suma,x,y;
x=prompt("numero 1","0");
y=prompt("numero 2","0");
suma=parseInt(x)+parseInt(y);
sal.value=suma;
return suma;
}
function restar (){
var suma,x,y;
x=prompt("numero 1","0");
y=prompt("numero 2","0");
suma=parseInt(x)-parseInt(y);
sal.value=suma;
return suma;
}
function multiplicar (){
var suma,x,y;
x=prompt("numero 1","0");
y=prompt("numero 2","0");
suma=parseInt(x)*parseInt(y);
sal.value=suma;
return suma;
}
function dvidir (){
var suma,x,y;
x=prompt("numero 1","0");
y=prompt("numero 2","0");
suma=parseInt(x)/parseInt(y);
sal.value=suma;
return suma;
}
function potencia (){
var suma,x,y;
x=prompt("numero 1","0");
y=prompt("numero 2","0");
suma=Math.pow(parseInt(x),parseInt(y));
sal.value=suma;
return suma;
}
function cuadrado (){
var suma,x;
x=prompt("numero 1","0");
suma=Math.pow(parseInt(x),parseInt(x));
sal.value=suma;
return suma;
}