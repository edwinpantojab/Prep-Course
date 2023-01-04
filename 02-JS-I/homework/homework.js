// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "edwin";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 39;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:dos codigos 
  //return x + y ;
  var sum = x + y // var es una variable para guardar el valor de X + Y 
  return sum; // return sum es la variable  que devuelve al valor 
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:dos codigos 
  //return x - y;
  var res=x-y // var res es una variable para guardar el valor de X - Y 
  return res; // return res es la variable  que devuelve al valor
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  //var mult=x*y // var mult es una variable para guardar el valor de X - Y 
  //ret mult;
  return x * y;// multiplica los valores y retorna el valor de los valores 
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  //return x / y
  let total = x/y;
  return total
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y){  // if es una condicional para comparar un numero 
   //o letra con otra y tambien revisa si se cumple la condicion
    return true;// true es que se cumple la condicion 
  }else { // else en una condicion que devulve un valor al no cumplir la primera condicion 
    return false;// false una condicion que se devuleve cunado no se cumple la condicion de if 
  }
   
    
  
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:la condicion de === es que es estrictamente igual al valor que se comnpara 
  if(str1.length === str2.length){ // length es una condicion que calcula la longitud de un valor o letra 
    return true;
  }else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:tres opciones de codigos 
  // if (num < 90){
  //return true; 
  // else {
  //return false; 
  //}
  //condicion ? si es verdadera : si es falsa-uso de ternarios ?
  //return num < 90 ? true : false 
  if (num < 90) return true;

  return false; 
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:tres opciones de codigos 
  // if (num > 50){
  //return true; 
  // else {
  //return false; 
  //}
  //condicion ? si es verdadera : si es falsa-uso de ternarios ?
  //return num > 50 ? true : false
  if (num > 50) return true

  return false
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
 var res= x % y
 return res; 
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  //return num % 2 === 0 //opcion mas rapida y corta 
  if (num % 2 === 0){
    return true;
  }else {
    return false // retorna falso porque el problema esta pidiendo un par 
  }

}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  //if (num % 2 !=0)return true 
  //return false
  if (num % 2 === 1){
    return true;
  }else {
    return false
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  // return num * num 
  return Math.pow(num,2);// Math.pow es la funsion que eleva la potencia de un valor
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  //return num ** 3
  return Math.pow(num,3)// Math.pow es la funsion que eleva la potencia de un valor 
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent);// Math.pow es la funsion que eleva la potencia de un valor
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto 
  //que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  // codigos 
  //if(numero > 0)return "Es positivo";
  //if(numero < 0)return "Es negativo";
  //if(numero === 0)return false;
  if(numero === 0) {
    return false;
  }
  else if (numero > 0){
    return "Es positivo";
  }
  else {
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 return str + "!";// desarrollo de una concatenacion str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:tres opciones de codigos 
  //var combinado = nombre + ` ` + apellido
  //return nombre + " " + apellido
  return nombre + " " + apellido;// desarrollo de una concatenacion str + " ";
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la 
  //siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  //se pueden usar comillas sencillas o dobles 
  return "Hola " + nombre + "!";// desarrollo de una concatenacion str + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  //el area es la parte interna de un cuadrado o rectangulo 
  return alto * ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  //los valores que estan dentro de parentesis simpre el pograma lo resuelve primero 
  return (base * altura)/2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  //el signo = es para asignar un valor 
  //el signo == es que un valor debe ser igual a otro 
  //el signo === es que un valor debe ser exactamente igual a otro 

  if(letra.length > 1){ // length mide la longitud de la letra en este caso es solo una letra "y"
 
    return "Dato incorrecto";

  }else if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ){

    return "Es vocal";
  }
    return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
