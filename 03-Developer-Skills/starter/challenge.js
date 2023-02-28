'use strict';

const temp = [3, -2, -6, -1, 'error', 9];
const temp1 = [13, 17, 15, 14, 9, 5];

const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
const tempAmplitude = temp => {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] != 'number') continue;
    else {
      if (temp[i] > max) max = temp[i];
      else if (temp[i] < min) min = temp[i];
    }
  }
  return max - min;
};
const mergedArray = mergeArrays(temp, temp1);
console.log(tempAmplitude(mergedArray));
