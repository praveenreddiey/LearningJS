const bill1 = 275;
const tip = bill1 <= 300 && bill1 >= 50 ? 15 : 20;
console.log(tip);
const totalBill = bill1 + (bill1 * tip) / 100;
console.log(
  `bill was ${bill1} and tip was ${tip} and totalBill was ${totalBill}`
);
