function withBorder(image) {
  let marco = document.getElementById(image);
  let sinBorde = marco.style.border;

  if (sinBorde != 0) {
    marco.style.border = "";
  } else {
    marco.style.border = "2px solid red";
  }
}

function isNumber(evento) {
  let numeros = "0123456789";

  // Obtiene la tecla pulsada (codigo ASCII)
  let codigoCaracter = evento.charCode || evento.keyCode;
  // Obtiene la tecla pulsada
  let caracter = String.fromCharCode(codigoCaracter);

  // Se Comprueba si la variable "caracter" es un numero
  if (numeros.indexOf(caracter) != -1) {
    return numeros;
  } else {
    alert("Debes ingresar solo Numeros");
    return false;
  }
}

function totalSticker() {
  let stick1 = document.querySelector("#kyrby");
  let stick2 = document.querySelector("#panda");
  let stick3 = document.querySelector("#astro");
  let total = document.querySelector("#total");

  let suma = Number(stick1.value) + Number(stick2.value) + Number(stick3.value);

  if (Number(suma) <= 10) {
    total.innerHTML = Number(suma);
  } else {
    total.innerHTML = "Demasiados";
  }
}

function validaPassword() {
  let passwd1 = "911";
  let passwd2 = "714";

  let num1 = document.querySelector("#selector1");
  let num2 = document.querySelector("#selector2");
  let num3 = document.querySelector("#selector3");
  let passwd = document.querySelector("#passw-valida");

  let numCompleto = num1.value + num2.value + num3.value;

  if (numCompleto == passwd1 || numCompleto == passwd2) {
    if (numCompleto == passwd1) {
      passwd.innerHTML = "Password #1 [" + numCompleto + "] Correcta";
    } else {
      passwd.innerHTML = "Password #2 [" + numCompleto + "] Correcta";
    }
  } else {
    passwd.innerHTML = "Password [" + numCompleto + "] Incorrecta";
  }
}
