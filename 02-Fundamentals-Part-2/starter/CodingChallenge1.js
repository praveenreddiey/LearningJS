"use strict";

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphAvg = calcAvg(85, 54, 41);
let koalasAvg = calcAvg(23, 34, 27);
console.log(`avg score of Dolphins is ${dolphAvg}`);
console.log(`avg score of Koalas is ${koalasAvg}`);

function checkWinner(dolphAvg, koalasAvg) {
  if (dolphAvg >= 2 * koalasAvg) {
    console.log(`Dolphins wins (${dolphAvg} vs ${koalasAvg})`);
  } else if (koalasAvg >= 2 * dolphAvg)
    console.log(`Koalas wins (${koalasAvg} vs ${dolphAvg})`);
  else console.log("no one won");
}

checkWinner(dolphAvg, koalasAvg);
dolphAvg = calcAvg(44, 23, 27);
koalasAvg = calcAvg(65, 54, 49);
checkWinner(dolphAvg, koalasAvg);
//checkWinner(50, 60);
