'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //fix the bug
    //conver the data type to number
    value: Number(prompt('enter degree in celcius')),
  };
  //   console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  return kelvin;
};

//identify the bug
//find the bug

console.log(measureKelvin());
