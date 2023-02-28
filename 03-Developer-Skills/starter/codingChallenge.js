'user strict';

let str = '';
const printForecast = temp => {
  for (let i = 1; i <= temp.length; i++) {
    str += `...${temp[i - 1]}\u00B0 in ${i} days...`;
  }
  return str;
};
const temp = [17, 21, 23];
console.log(printForecast(temp));
