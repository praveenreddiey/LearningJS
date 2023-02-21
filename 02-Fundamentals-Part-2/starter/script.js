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

//unline java, we can have different types inside an array

const movieDetails = ["sitaramam", 2022];
console.log(movieDetails);
console.log(friends[0]);
console.log(movies);

//exercise
const calcAge1 = (birthYear) => 2023 - birthYear;

const years = [1997, 1996, 1995];
for (let i = 0; i < years.length; i++) {
  const age = calcAge1(years[i]);
  console.log(`age is ${age}`);
}
