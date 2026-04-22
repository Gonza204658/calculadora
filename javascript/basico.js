let num1 = "";
let num2 = "";
let op = "";

// ESCRIBIR NÚMEROS
function numero(n){

    if(op == ""){
        num1 += n;
        document.getElementById("n1").value = num1;
    }else{
        num2 += n;
        document.getElementById("n2").value = num2;
    }
}

// ELEGIR OPERADOR
function operador(o){
    op = o;
    document.getElementById("op").value = op;
}

// CALCULAR
function calcular(){

    let n1 = Number(num1);
    let n2 = Number(num2);
    let resultado;

    if(op == "+") resultado = n1 + n2;
    if(op == "-") resultado = n1 - n2;
    if(op == "*") resultado = n1 * n2;

    if(op == "/"){
        if(n2 == 0){
            document.getElementById("res").value = "Error";
            return;
        }
        resultado = n1 / n2;
    }

    document.getElementById("res").value = resultado;
}

// BORRAR TODO
function borrar(){
    num1 = "";
    num2 = "";
    op = "";

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("op").value = "";
    document.getElementById("res").value = "";
}