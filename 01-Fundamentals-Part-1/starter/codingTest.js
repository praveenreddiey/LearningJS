const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 95;
const johnsHeight = 1.88;
const BMIOfMark = marksWeight / marksHeight ** 2;
const BMIOfJohn = johnsWeight / johnsHeight ** 2;
const result = BMIOfMark > BMIOfJohn;
console.log(BMIOfMark, BMIOfJohn);
if (BMIOfMark > BMIOfJohn) {
  console.log(`Marks BMI ${BMIOfMark} is greater than Johns BMI ${BMIOfJohn}`);
} else {
  console.log(`Johns BMI${BMIOfJohn} is greater than Marks BMI${BMIOfMark}`);
}
