//1
const num1 = "20";
const num2 = 10;
const convertNum = parseInt(num1);
const sum = convertNum + num2;
console.log(sum); // 30

//2
const PI = "3.14159";
const ConNum = parseInt(PI);
console.log(ConNum); // 3

//3
const convName = parseInt("premikBoy");
console.log(convName); // NaN

//4
const num3 = 3.456;
const num4 = 2.789;

const numSum = num3 + num4;
const result = numSum.toFixed(2);
console.log(result);

//5
const str1 ="56.78";
const str2 ="12.34";

const convStr2num1 = parseInt(str1);
const convStr2num2 = parseInt(str2);

const Sum = convStr2num1 + convStr2num2;

console.log(Sum);

//6
const num5 = 10.5678;
const num6 = 5.4321;

const num5Reslt = num5.toFixed(1);
const num6Reslt = num6.toFixed(1);

console.log(num5Reslt, num6Reslt);

//7
 let num = 42.45689754;
 const resultNum = num.toFixed(3)
 console.log(resultNum);