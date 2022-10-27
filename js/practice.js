"use strict";
console.log("practice.js");

// # praktika

// 1. pakeisti `<h1>String methods</h1>` teksto 'methods' dali i "metodai"
let h1MainEl = document.getElementById("h1Main");
console.log("h1MainEl ===", h1MainEl);
h1MainEl.textContent = h1MainEl.textContent.replace("methods", "metodai");

// 2. pakeisti `<p>It is all a ok until we have to use loops</p>` 'until we' i 'we just'
let pMainEl = document.getElementById("pMain");
pMainEl.textContent = pMainEl.textContent.replace("until we", "we just");

// 3. sukurti funkcija kuri argumentu gauna stringa pvz 'lape' ir sukuria html h3 elementa su viduje esanciu tekstu kurio pirmoji raide paversta i didziaja ir pataplina elementa i dokumento body apacia pvz `<h2>Lape</h2>`

let string = "lape";
console.log(string.slice(0, 1));
console.log(string.slice(1));
(() => {
  const h3El = document.createElement("h3");
  h3El.textContent = string.slice(0, 1).toUpperCase() + string.slice(1);
  console.log("h3El ===", h3El);
  document.body.append(h3El);
  //   return string.slice(0, 1).toUpperCase() + string.slice(1);
})();

// 4. `const proverb =
//   'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';`
const proverb =
  "sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu";

//    1. pakeisti pirma 'sesi' i '6'
let changedNew = proverb.replace("sesi", "six");
console.log(changedNew);

//    2. pakeisti visus 'sesi' i 'six'

let changed = proverb.replace(/sesi /gi, "six ");
console.log(changed);
// // 5.  Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei
// sveikas, po apačia sukurk h2 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

let nameEL = document.getElementById("InsertedName");
let timesEl = document.getElementById("insertedTimes");
let submitBtnEl = document.getElementById("submitBtn");
console.log("submitBtnEl ===", timesEl);
submitBtnEl.addEventListener("click", () => {
  let PiICreatedByeBye = document.querySelectorAll(".PiICreated");
  console.log("PiICreatedByeBye ===", PiICreatedByeBye);
  console.log("PiICreatedByeBye ===", PiICreatedByeBye.length);
  for (const iterator of PiICreatedByeBye) {
    console.log(iterator);
    iterator.remove();
  }

  if (timesEl.value % 1 === 0) {
    for (let i = 0; i < timesEl.value; i++) {
      let pICreated = document.createElement("p");
      pICreated.classList.add("PiICreated");

      pICreated.textContent = nameEL.value;
      document.body.append(pICreated);
    }
  } else {
    alert("wrong number");
  }
});

// 6. ```html
//     <ul>
//       <li>one</li>
//       <li>one</li>
//       <li>one</li>
//       <li>one</li>
//       <li>one</li>
//     </ul>
//     ```
//     prideti kiekvienam elementui z
