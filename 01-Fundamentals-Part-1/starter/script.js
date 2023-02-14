const name = "praveen";
const flag = false;
const number = 26;

console.log(typeof name, typeof flag, typeof number);
console.log(name, flag, number);

const birthdate = 1997;
const grad = 2018;
const age = 2023 - birthdate;
const exp = 2023 - grad;
console.log("praveen", age);
console.log("praveen" + " " + "reddy");

//assignment operators
let x = 10;
x += 5;
x++;
console.log(x);

//comparison operators
const isfullAge = age >= 18;
console.log(age >= 18);

let z, y;
z = y = 20 - 10 - 5;
console.log(z, y);
const avg = (age + exp) / 2;
console.log(age, exp, avg);
