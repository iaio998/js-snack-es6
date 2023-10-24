// SNACK 1
"use strict";
const snack1 = "SNACK 1";
console.log(snack1);

const vipTable = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
console.log(vipTable);

const newTable = [];

vipTable.forEach((item, index) => {
  const vip = {
    tableName: "Vip Table",
    guestName: item,
    place: index + 1,
  };
  newTable.push(vip);
});
console.log(newTable);

// SNACK 2
const snack2 = "SNACK 2";
console.log(snack2);

const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];
