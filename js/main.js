//Execici 1 Conversió de funcions: Tens una funció add que accepta dos paràmetres
//  i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple:
//  function add(a, b) {return a + b;}.
console.log("////////////////////BLOC 1: Arrow functions/////////////////////");
console.log("--------Nivell 1--------");
const add = (a, b) => a + b;

console.log(add(2, 3));

//Execici 2 Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada
// randomNumber que no necessiti paràmetres i que retorni un número aleatori entre
// 0 i 100.

const numeroRandomdeloal100 = () => Math.floor(Math.random() * 101);

console.log(numeroRandomdeloal100());

//Execici 3 Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui
// una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha
// d'imprimir una salutació que inclogui el nom de la persona. Per exemple:
// console.log(Hola, ${this.name});.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

const person = new Person("Xavier");
person.greet();

//Nivell 2
//EXERCICI 4 Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que
// accepti un array de números i utilitzi un loop for per imprimir cada número a la consola
// utilitzant una funció de fletxa.
console.log("--------Nivell 2--------");

let arrayNum = [1, 2, 3, 4];

function printNumbers(numeros) {
  for (i = 0; i < numeros.length; i++) {
    const imprimir = (num) => {
      console.log(num);
    };
    imprimir(numeros[i]);
  }
}
printNumbers(arrayNum);

//Nivell 3
//Exercici 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la
// consola després d'esperar 3 segons.

const add1 = (a, b) => {
  setTimeout(() => {
    const resultat = a + b;
    console.log(
      "NIVELL 3 - EXERCICI 5, DEL BLOC 1, setTimeout 3 segons",
      "  El resultat és",
      resultat
    );
  }, 3000);
};
add1(9, 9);

//Exercici 1 Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com
//  a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat
//   és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
console.log(
  "////////////////////BLOC 2: Operador ternari/////////////////////"
);
console.log("--------Nivell 1-------");

function potsConduir(edat) {
  return edat >= 18 ? "Pots conduir" : "No pots conduir";
}
console.log(potsConduir(17));

//Exercici 2 Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador
// ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1
// és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

function mesGran(num1, num2) {
  return num1 > num2 ? "Num1 és més gran" : "Num2 és més gran";
}
console.log(mesGran(14000, 1000));

//Exercici 3 Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços
// d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
console.log("-------Nivell 2-------");

var numero = 0;
var resultat;

resultat = numero > 0 ? "positiu" : numero < 0 ? "negatiu" : "zero";

console.log(resultat);

//Exercici 3-B Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres
// paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function trobarValorMaxim(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
var valorMaxim = trobarValorMaxim(10, 40, 30);
console.log(valorMaxim);

//Exercici 4 Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array
// de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador
// ternari per a determinar si cada número és parell o imparell.
console.log("-------Nivell 3-------");

function parOImpar(array) {
  for (i = 0; i < array.length; i++) {
    var nombre = array[i];
    var tipus = nombre % 2 === 0 ? "parell" : "imparell";
    console.log(nombre + " és " + tipus);
  }
}
var nombres = [1, 2, 3, 4];
parOImpar(nombres);

//////////////////////////////////BLOC 3: Callbacks/////////////////////////////////////
//Nivell 1
//Exercici 1 Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
//  un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback,
//  passant el nombre com a paràmetre.
console.log("////////////////////BLOC 3: Callbacks/////////////////////");
console.log("BLOC 1.3");
console.log("--------Nivell 1--------");

function processar(numero, callback) {
  callback(numero);
}

function callback2() {
  const numeroRandomdeloal10 = () => Math.floor(Math.random() * 11);
  console.log(
    "El número aleatori demanat de l'1 al 10 és: ",
    numeroRandomdeloal10()
  );
}

processar(12, callback2);

//Nivell 1
//Exercici 2 Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres:
// dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres
// com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(nombre1, nombre2, callback) {
  callback(nombre1, nombre2);
}
function callback3(nombre1, nombre2) {
  const suma = nombre1 + nombre2;
  console.log(suma);
}

calculadora(4, 5, callback3);

//////////////////////////////BLOC 4: Rest & Spread operators/////////////////////////////
//Nivell 1
//Exercici 1
console.log(
  "////////////////////BLOC 4: Rest & Spread operators/////////////////////"
);
console.log("BLOC 1.4");
console.log("-------Nivell 1--------");

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let numeros3 = [...numeros1, ...numeros2];

console.log(numeros3);

//Exercici 2 Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest
// per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total = total + num;
  }
  return total;
}
console.log(suma(12, 12, 12, 12));

////////////////////////////BLOC 5: Array transformations///////////////////////////////
//Nivell 1
//Exercici 1 Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el
// quadrat de cada número.
console.log(
  "////////////////////BLOC 5: Array transformations/////////////////////"
);
console.log("BLOC 1.5");
console.log("--------Nivell 1--------");

let array = [1, 2, 3, 4];

let arrayMap = array.map(function (num) {
  return num * num;
});
console.log(arrayMap);

//Exercici 2 Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només
// contingui els números parells.

let arrayFilter = array.filter(function (num) {
  return num % 2 === 0;
});
console.log(arrayFilter);

//Exercici 3 Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a
// trobar el primer número que és major a 10.

let arrayF = [1, 10, 8, 11];
let arrayFind = arrayF.find(function (num) {
  return num > 10;
});
console.log(arrayFind);

//Exercici 4 Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per
// a calcular la suma total dels números.
let arrayR = [13, 7, 8, 21];

let arrayReduce = arrayR.reduce(function (acumulat, num) {
  return acumulat + num;
}, 0);
console.log(arrayReduce);

////////////////////////////////////BLOC 6: Array loops////////////////////////////////
//Nivell 1
//Exercici 1 forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la
// consola: let noms = ['Anna', 'Bernat', 'Clara'];
console.log("////////////////////BLOC 6: Array loops/////////////////////");
console.log("BLOC 1.6");
console.log("---------Nivell 1--------");

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach(function (nom) {
  console.log(nom);
});

//Exercici 2 for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom
// a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

for (var nom of noms) {
  console.log(nom);
}

//Exercici 3 filter: Teniu una array de números. Utilitza filter per a crear una nova array que
// només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

let arrayNumeros = [1, 2, 3, 4, 5, 6];

let arrayParells = arrayNumeros.filter(function (num) {
  return num % 2 === 0;
});
console.log(arrayParells);

////////////////////////////////////BLOC 7: Promises & Async/Await////////////////////////////
//Nivell 1
//Exercici 1 Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
// retorni la cadena de text 'Hola, món'.
console.log(
  "////////////////////BLOC 7: Promises & Async/Await/////////////////////"
);
console.log("BLOC 1.7");
console.log("---------Nivell 1--------");

const promesa = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

//Exercici 2 Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea
// un .then que imprimeixi el resultat a la consola.

promesa.then((missatge) => {
  console.log("Exercici 2", missatge);
});

//Exercici 3 Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és
// igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

function comprovar(input) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (input === "hola") {
        resolve("Exercici 3, Resultat resolve! Input és igual a hola");
      } else {
        rejected("Exercici 3, Resultat rejected! Input no és igual a hola");
      }
    }, 2000);
  });
}

comprovar("hola")
  .then((missatge) => {
    console.log(missatge);
  })
  .catch((missatge) => {
    console.log(missatge);
  });

//Exercici 4 Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a
// esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat
// a la consola.

async function getResposta() {
  let resultat = await promesa;
  console.log("Exercici 4", resultat);
}
getResposta();

//proves
console.log("PROVES");
