"use strict";

const Mark = {
  fullName: "Mark Miler",
  mass: 92,
  height: 1.95, //1.95
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 78, //78
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
Mark.calcBMI();
John.calcBMI();
console.log(Mark.BMI);
console.log(John.BMI);

//or we can use with if condition -- hell yeah

const higherBMI =
  Mark.BMI > John.BMI
    ? console.log(
        `${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI}) `
      )
    : console.log(
        `${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI}) `
      );
