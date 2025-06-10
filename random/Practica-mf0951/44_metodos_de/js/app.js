let salida = document.getElementById("cascos");
let boton = document.querySelector("button");

let a = 36; //
let b = "36"; //
let c = "joaquín"; //
let d = 7.09; //
let e = "3.09"; //
let f = "Rüdiger"; //
let x = 123;
let y = 456;
let z = 8.09;

function aritmetica(){

    document.getElementById("cascos").innerHTML =
    typeof x.toString() + "<br>" +
    typeof x.toString() / ("miguel") + "<br>" +
    typeof parseInt("123") + "<br>" +
    parseInt("456") * y + "<br>" +
    typeof parseInt(z) + "<br>" +
    typeof Number("8.09");
    salida.classList.toggle('visible');
}

boton.addEventListener("click", aritmetica);

let salida2 = document.getElementById('cascos2');
let boton2 = document.querySelector('#math2 button');

function aritmetica2(){

    document.getElementById("cascos2").innerHTML =
    typeof parseInt(b) + "<br>" +
    (Number(d) * (x)) + "<br>" +
    (c) + a.toString() + "<br>" +
    typeof ((a) / parseInt(d))  + "<br>" +
    (f) / parseInt(e)  + "<br>" +
    typeof (c + f) + "<br>" +
    (parseInt(b) + a) + "<br>" +
    typeof z.toString();
    
    salida2.classList.toggle('visible');
    
}

boton2.addEventListener("click", aritmetica2);    

//













