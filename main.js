function esParOImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }

  esParOImpar(5);
  esParOImpar(10);

  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
      console.log(num2 + " es mayor que " + num1);
    } else {
      console.log("Ambos números son iguales.");
    }
  }

compararNumeros(10, 5);  
compararNumeros(2, 4);  
compararNumeros(5, 5); 

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5.");
    } else {
      console.log(numero + " no es múltiplo de 5.");
    }
  }

esMultiploDeCinco(10); 
esMultiploDeCinco(7); 

function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

imprimirNumerosHasta(5);

function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }

imprimirPalabra("Hola", 4);

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

imprimirArray([1, 2, 3, 4, 5]);

function imprimirSinQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { // Omitimos el índice 4 (5ta posición)
        console.log(array[i]);
      }
    }
  }

imprimirSinQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function multiplicarArray(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * multiplicador);
    }
  }

multiplicarArray([1, 2, 3, 4, 5], 3); 

