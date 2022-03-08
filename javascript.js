  nombre = "franco zavala";
  /* ctrl + alt + signo de cerrar la llave backtips */
  frase = `soy ${nombre} y estoy caminando`;
  document.write(frase + "<br>");

  function valor(num) {
    if (num <= 10 ){
        return "Numero menor a 10";
    } else {
        return "Numero mayor a 10";
    }
  };
  document.write(valor(11) + "<br>")

 /* Si quiero detenerme en algun número uso el comando BREAK */
  for (let i = 0; i < 6; i++) {
   document.write(i + "<br>");
   if (i == 3){
     break;
   }
  }
  /* Si quiero saltar algun dato uso el comando CONTINUE */
  for (let i = 20; i >= 0; i--){
    if(i == 12){
      continue;
    }
    document.write(i + " " + "<br>");
  }
  /* Bucle While */
  const ourArray = [];
  let j = 0;

  while (j < 5) {
    ourArray.push(j);
    j++;
  }
    document.write(ourArray + "<br>")
/* Buble FOR IN - Nos muestra la posición - se utiliza para recorrer objetos y operar con esos objetos */
let animales = ["gato" , "perro" , "chancho"];
for (animal in animales){
  document.write(animal);
}
document.write("<br>");
/* Buble FOR OF - Nos muestra el valor de la variable */
for (animal of animales){
  document.write(animal + " ");
}
/*Bucle Label */
array1 = ["maria","jose","roberto"];
array2 = ["pedro","marcelo",array1,"alfredo"];
forAtajo:
for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
      if (array == "maria") {
        continue forAtajo;
      }
      document.write(array + "<br>");
    }
  }
}
/* Funciones flecha, hay 3 formas de colocar funciones y la función flecha es una de ellas */

/*function saludar (nombre) {
  let frase = `¡Hola ${nombre}! ¿Como estas?`;
  document.write(frase)
}

const saludar = function(nombre){
  let frase = `¡Hola ${nombre}! ¿Como estas?`;
  document.write(frase)
} */

/* const saludar = nombre => {
  let frase = `¡Hola ${nombre}! ¿Como estas?`;
  document.write(frase)
} 
saludar("pedro") 

Esto se puede escribir de la siguiente forma: */
document.write("<br>")
const saludar = (nombre) => {document.write("hola como estas?" + nombre)}

saludar("pedro")

document.write("<br>")
document.write("<br>")

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
document.write(multiply([2, 3, 4],2))

document.write("<br>")
/* Recursión: Sirve para usarlo como alternativa para un bucle for*/
function multi(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multi(arr, n - 1) * arr[n - 1];
  }
}
document.write(multi([2, 6, 4],3))
document.write("<br>")
/*Ejemplo de recursión*/
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
 document.write(countup(5)) 