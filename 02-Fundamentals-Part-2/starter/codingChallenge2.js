"use strict";

const tip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const totalBill = (bill) => {
  const totalAmount = tip(bill) + bill;
  console.log(`total bill is ${totalAmount}`);
};
const bills = [125, 555, 44];
for (let i = 0; i < bills.length; i++) {
  totalBill(bills[i]);
}
