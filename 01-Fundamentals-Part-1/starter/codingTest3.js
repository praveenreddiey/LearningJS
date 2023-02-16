const dolphinsAvg = (90 + 108 + 89) / 3;
const koalasAvg = (88 + 95 + 110) / 3;
console.log(dolphinsAvg);
console.log(koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("dolphins are winners");
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
  console.log("koalas are winners");
} else if (
  dolphinsAvg === koalasAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("it is draw");
} else {
  console.log("no one wins");
}
