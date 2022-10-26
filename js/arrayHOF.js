'use strict';
console.log('arrayHOF.js');

const numArray = [5, 15, -2, 0, -5, 7];

//

for (let sk of numArray) {
  // suksis per visa masyva
  // kiekvieno ciklo metu reiksme lygi sk
  // console.log('sk ===', sk);
}

// Array.prototype.forEach(fn) - kazka atlikti su kiekviena reiksme
//fn(elementas, indexas, patsMasyvas)

numArray.forEach(function (sk, i, arr) {
  // console.log(`indexas: ${i}, reiksme: ${sk ** 2} ---- `, arr);
  // console.log('priekyje index esanti reikmse', arr[i + 1]);
});

// const printPositiveNubers = function (sk) {
//   if (sk > 0) {
//     console.log(sk);
//   }
// };
function printPositiveNumbers(sk) {
  if (sk > 0) {
    console.log(sk);
  }
}

let kazkas = numArray.forEach(printPositiveNumbers);
console.log('kazkas ===', kazkas);

// atrinkti i nauja masyva visus teigiamus
const positives = [];
numArray.forEach((sk) => {
  if (sk > 0) {
    positives.push(sk);
  }
});

console.log('positives ===', positives);

// paversti masyvo neigiamus skaiciu teigiamais

numArray.forEach((sk, i, arr) => {
  // jei sk neigiamas
  if (sk < 0) {
    // padauginti is -1
    console.log('sk * -1 ===', sk * -1);
    // irasyti reiksme i masyvo orginala
    arr[i] = sk * -1;
  } else {
    console.log('sk', sk);
  }
});
console.log('numArray ===', numArray);

// paskaiciuoti numArray masyvo vidurki

let str1 = 'Brown fox jumped over the lazy dog.';
str1.split(' ').forEach((word, i, arr) => {
  console.log('word ===', word);
});
