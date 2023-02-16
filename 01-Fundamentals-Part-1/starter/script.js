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

const praveen = "praveen";
const job = "software engineer";
const dob = 2023 - 1997;

//template literal
const praveenInfo = `I'm ${praveen} , a ${dob} year old ${job}`;
console.log(praveenInfo);

console.log(`String
multiple
lines`);

//if else
const personAge = 17;
const isOldEnough = personAge >= 18;
const yearsleft = 18 - personAge;

if (isOldEnough) {
  console.log("eligible to vote");
} else {
  console.log(`Sarah not eligible to vote, she has to wait ${yearsleft} years`);
}

//type conversion
const inputYear = "1997";
console.log(Number(inputYear) + 10);

//equality opearator
// === does not perform type coercion where == performs type coercion
//it is highly recommended to use === for comparisions
const pageNo = "20";
if (pageNo == 20) console.log(`there are ${pageNo} pages`);
if (pageNo === 20) console.log(`there are ${pageNo} pages`);

// const favActress = prompt("who is ur fav actress");
//console.log(typeof favActress);

// if (favActress === "jlo") console.log("she is a hottie");

//logical operators
const hasDriversLicense = true;
const hasGoodVision = true;
const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) console.log("trustable driver");
else {
  console.log("paripondroo");
}
