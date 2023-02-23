"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log("I can drive");
}

//function declaration

function fruitProcessor(fruit1, fruit2) {
  const juice = `juice with ${fruit1} and ${fruit2}`;
  return juice;
}
console.log(fruitProcessor("mango", "orange"));
console.log(fruitProcessor("apple", "orange"));

function calcAge(birthYear) {
  return 2023 - birthYear;
}
console.log(calcAge(1997));

//anonymous function or function expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
console.log(calcAge2(1997), calcAge(1996));

//arrow function, if there is only one statement we dont have to use curly braces and return
//but if there are two/more statements then curly braces and return has to b used

const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge2(1997), calcAge(1996), calcAge3(1995));

const birthDayWishes = (time, name, birthYear) => {
  const age = 2023 - birthYear;
  const wishes = `I have to wish ${name} at ${time}'o clock and his age is ${age}`;
  return wishes;
};
console.log(birthDayWishes(12, "praveen", 1997));

//arrays

const friends = ["pankaj", "prasanth", "chiru", "harsha"];

const movies = new Array(
  "Fight Club",
  "pulp fiction",
  "pokiri",
  "sita ramam",
  friends
);

//unlike java, we can have different data types inside an array

const movieDetails = ["sitaramam", 2022];
console.log(movieDetails);
console.log(friends[0]);
console.log(movies);

//exercise
const calcAge1 = (birthYear) => 2023 - birthYear;

//const years = [1997, 1996, 1995];
//const years = new Array(1997,'praveen');
for (let i = 0; i < years.length; i++) {
  const age = calcAge1(years[i]);
  console.log(`age is ${age}`);
}

//objects

const person = {
  p_name: "praveen",
  //age: 2023 - 1997,
  birthYear: 1997,
  job: "software developer",
  friends: ["pankaj", "prasanth", "chiru", "harsha"],
  // age: function () {
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  hasDriversLicense: true,
};

//dot and bracket notation

console.log(person.friends[0]);
console.log(person.p_name);
console.log(person["p_name"]);

const name = "name";
console.log(person["p_" + name]);

const interstedIn = prompt(
  "What do you want to know about the person name. job, age, friends ?"
);
console.log(interstedIn);

//console.log(person.interstedIn); it does not work as intersted in not a property of person object
//undefined is a falsy value

if (person[interstedIn]) console.log(person[interstedIn]);
else console.log("wrong request! choose between name, age, job and friends");

person.location = "hyderabad";
person["relation"] = "single";
console.log(person);

//challenge
console.log(
  `${person.p_name} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`
);
console.log(person.calcAge());
console.log(person.age);
console.log(person.age);
console.log(person.age);
console.log(person.age);

//another challenge

const driversLicenseStatus = () => {
  var status = this.hasDriversLicense ? "a" : "no";
  return `${person.p_name} is a ${person.age} years old and he has ${status} drivers license`;
};
console.log(driversLicenseStatus());

//for loops and bla bla bla

const praveenArray = [
  "praveen",
  "reddy",
  2023 - 1997,
  "software developer",
  friends,
];
const praveenTypes = [praveenArray.length];
for (let i = 0; i < praveenArray.length; i++) {
  // console.log(praveenArray[i], typeof praveenArray[i]);

  //filling an array
  // praveenTypes[i] = typeof praveenArray[i];
  praveenTypes.push(typeof praveenArray[i]);
}
console.log(praveenTypes);

//continue and break
