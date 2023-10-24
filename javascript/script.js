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
    place: index,
  };
  newTable.push(vip);
});
console.log(newTable);

// SNACK 2
