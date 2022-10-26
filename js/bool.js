'use strict';
console.log('bool.js');

let isLoggedIn = true;
console.log('isLoggedIn ===', isLoggedIn);
// paversti i priesinga

isLoggedIn = !isLoggedIn;

console.log('isLoggedIn ===', isLoggedIn);
console.log('isLoggedIn.toString() ===', isLoggedIn.toString());

let user = null;
user = {
  name: 'Mike',
};

// let isUserHere = Boolean(user);
let isUserHere = !!user;
console.log('isUserHere ===', isUserHere);

// ar jau turim vartotoja
if (user !== null) {
  // turim vartotjoa
}
if (user) {
  // Boolean(user)
  // turim vartotjoa
}

console.log('Boolean({}) ===', Boolean({}));
console.log('Boolean([]) ===', Boolean([]));

let obj1 = {};
let obj2 = {};
// obj1 = obj2;
console.log('obj1 === obj2', obj1 === obj2);

let arr1 = [1, 2];
let arr2 = [1, 2];
console.log('arr1 === arr2 ===', arr1 === arr2);

let arr3 = [1, 2, ['a', 'b']];
let arr4 = [1, 2, , 'a', 'b'];
console.log('arr3.toString() ===', arr3.toString());
console.log('JSON.stringify() ===', JSON.stringify(arr3, null, 2));
console.log('JSON.stringify() ===', typeof JSON.stringify(arr3, null, 2));

let colors = [];

// kaip patikrinti ar colors yra tuscias?
if (colors.length) {
  console.log('colors pilnas');
} else {
  console.log('colors tuscias');
}

let obj5 = {};

console.log("JSON.stringify(obj5) === '{}' ===", JSON.stringify(obj5) === '{}');
