'use strict';
console.log('string.js');
//                    10        20
//          012345678901234567890123456789
let str1 = 'Brown fox jumped over the lazy dog.';

// string ilgis
console.log('str1.length ===', str1.length);

// iskirpti dali stringo String.prototype.slice(start, end)
const firstWord = str1.slice(0, 6);
console.log('firstWord ===', firstWord);

// iskirpti viska isskyrus pirma zodi?
const allButFirstWord = str1.slice(6);
console.log('allButFirstWord ===', allButFirstWord);

// padaryti pirma zodi didziosiom raidem
console.log(firstWord.toLocaleUpperCase() + allButFirstWord);

// String.prototype.substr(start, length) nebenaudojamas naujiems projektams
// iskerpam dali stringo su pradzia ir kiek iskirpti
// gauti zodi 'over'
// const overWord = str1.substr(17, 4);
const overWord = str1.slice(17, 17 + 4);
console.log('overWord ===', overWord);

str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';

// String.prototype.replace('ka', 'i ka')
// pakeisti 'jumped' i 'persoko'
const replaced1 = str1.replace('jumped', 'persoko');
console.log('replaced1 ===', replaced1);

// replace ka argumente gali naudoti regular expression
// /g - global, pakeisti visas reiksmes
const replaced2 = str1.replace(/jumped/g, 'persoko');
console.log('replaced2 /jumped/g ===', replaced2);

// /i - case insensitive, pakeisti reiksmes neziurint ar didzioji ar mazoji raide
const replaced3 = str1.replace(/jUmPeD/i, 'persoko');
console.log('replaced3 /jUmPeD/i ===', replaced3);

str1 = 'Brown fox 5 jumped over 6 the lazy 7 dog. And in 8 jumped again.';
console.log("str1.replace(/ov/, 'OV') ===", str1.replace(/\d+/g, '*Skaicius*'));

// regex .match(expression)
console.log("str1.match(/[a-zA-Z]+/g).join(' ') ===", str1.match(/[a-zA-Z]+/g).join(' '));

// String.prototype.concat(string, string. ....)
let str2 = 'Brown'.concat(' ', 'fox', ' ', 'persoko per suni');
console.log('str2 ===', str2);

// String.prototype.trim() - pasalinti tuscius tarpus is sonu
let text1 = '      Hello World!      ';
let text2 = text1.trim();

str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';
// String.prototype.split(skirtukas) - padalina stringa i masyva per nurodyta skirtuka
// Array.prototype.join(skirtukas) - sujungia masyva i string per nurodyta skirtuka

const zodziuMasyvas = str1.split(' ');
console.log('zodziuMasyvas ===', zodziuMasyvas);

const raidziuMasyvas = str1.split('');
// console.log('raidziuMasyvas ===', raidziuMasyvas);

const sakiniuMasyvas = str1.split('.');
console.log('sakiniuMasyvas ===', sakiniuMasyvas);

console.log('new Date() ===', new Date().toISOString().split('T')[0]);

// Array.prototype.join(skirtukas) - sujungia masyva i string per nurodyta skirtuka
// sujungti zodziu masyva atgal
const zodziaiFromArray = zodziuMasyvas.join('');
// const zodziaiFromArray = zodziuMasyvas.toString();
console.log('zodziaiFromArray ===', zodziaiFromArray);

//
str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';
// String.prototype.indexOf('ko ieskom')
//
let overIndex = str1.indexOf('jumped');
console.log('overIndex ===', overIndex);
console.log('str1.slice(0, overIndex); ===', str1.slice(0, overIndex));

// String.prototype.includes('ko ieskom') - grazina true arba false
console.log("str1.includes('lazy') ===", str1.includes('lazy1'));

// mini uzd
// iskirpti sakini nuo 'fox' iki 'And' panaudojant indexOf

// gauta reikmes paversti i masyva

// sujungti atgal i sakini su ' ++ '

// extra // sujungi atgal padariu paskutine raide didziaja
