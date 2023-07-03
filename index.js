// 1 Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numero(number) {
  if (number % 2) {
    console.log("El número es impar");
  } else {
    console.log("El número es par");
  }
}

numero(number);

// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const esMayor = (num1, num2) => {
  const iguales =
    num1 == num2
      ? console.log(`${num1} y ${num2} son iguales`)
      : num1 > num2
      ? console.log(`${num1} Es mayor que ${num2}`)
      : console.log(`${num1} Es menor que ${num2}`);
};

esMayor(405, 94);

// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiplo(num) {
  if (num % 5 === 0) {
    console.log(num + " es multiplo de 5");
  } else {
    console.log(num + " no es multiplo de 5");
  }
}
esMultiplo(6);

// Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function contador(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
contador(6);

// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function recibirPalabra(pal, num) {
  for (let i = 0; i < num; i++) {
    console.log(pal);
  }
}
recibirPalabra("cuanto", 5);

// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function escribirValores(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const numeros = [1, 2, 3];

escribirValores(numeros);

// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprVal(array) {
  for (let i = 0; i < array.length; i++) {
    if (i != 4) {
      console.log(array[i]);
    }
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

imprVal(numbers);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiploX(array, numer) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numer);
  }
}
multiploX([1, 2, 3, 4], 3);
