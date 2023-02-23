"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const tip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const totalBill = (bill) => {
  const totalAmount = tip(bill) + bill;
  return totalAmount;
};
for (let i = 0; i < bills.length; i++) {
  const tip1 = tip(bills[i]);
  tips.push(tip1);
  const totalAmount = totalBill(bills[i]);
  total.push(totalAmount);
}
console.log(tips);
console.log(total);

//bonus
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calcAvg = () => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
};
console.log(calcAvg());
