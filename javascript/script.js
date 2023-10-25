//! SNACK 1
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

//! SNACK 2
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
console.log(students);

const targheStudents = students.map(
  (student) => (student.name = student.name.toUpperCase())
);
const more70Students = students.filter((student) => student.grades > 70);
const more70PlusId = students.filter(
  (student) => student.grades > 70 && student.id > 120
);

console.log(targheStudents, more70Students, more70PlusId);

//! SNACK 3
const snack3 = "SNACK 3";
console.log(snack3);

const bici = [
  {
    nome: "Bianca",
    peso: 18,
  },
  {
    nome: "Cristiana",
    peso: 15,
  },
  {
    nome: "Verde",
    peso: 22,
  },
  {
    nome: "Nero",
    peso: 21,
  },
  {
    nome: "Grigio",
    peso: 19,
  },
];
console.log(bici);

const minor = [];

bici.forEach((el, index) => {
  const { peso } = bici[index];
  console.log({ peso });
  minor.push(peso);
});

const lighterBike = bici.filter((el) => el.peso === Math.min(...minor));
console.log(lighterBike);
console.log(
  `La bici piu' leggera in vetrina e' ${lighterBike[0].nome} e pesa: ${lighterBike[0].peso} kg`
);

//! SNACK 4
const snack4 = "SNACK 4";
console.log(snack4);

const squadre = [
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];
console.log(squadre);
