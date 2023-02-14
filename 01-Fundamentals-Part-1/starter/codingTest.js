const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 95;
const johnsHeight = 1.88;
const BMIOfMark = marksWeight / marksHeight ** 2;
const BMIOfJohn = johnsWeight / johnsHeight ** 2;
const result = BMIOfMark > BMIOfJohn;
console.log(BMIOfMark, BMIOfJohn);
console.log(result);
