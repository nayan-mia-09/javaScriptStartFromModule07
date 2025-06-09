// 1
const subject = ["Bangla", "English", "Math", "Science", "Geography", "Economics", "Political Science"];

for(const sub of subject){
    console.log(sub);
}

// 2
const favFood = ["Rice", "Lentil", "Khichuri", "Briyani", "Desert"];

for(const food of favFood){
    console.log(food);
}

// 3
const familyMembers = [1980, 1978, 1996, 2003];

for(const date of familyMembers){
    console.log(date);
}

// 4
const team = ["Jamal", "Sohel", "Tariq", "Hamza", "Fahmidul", "Rakib", "Morsalin", "Shomit", "Mitul"];

for(const player of team){
    console.log(player);
}

// 5
const examDate = ["Dec 31", "Jan 2", "Jan 5", "Jan 10", "Jan 13", "Jan 17", "Jan 25", "Feb 4"];

for(const date of examDate){
    console.log(date);
}

// While Loop

// 1
let num = 0;

while(num <= 10){
    console.log("ami protidin 3 ghonta code practice korbo");
    num ++;
}

// 2

let NUM = 1;
while(NUM <= 20){
    console.log(NUM);
    NUM ++;
}

// 3

let number = 50;
while(number <= 100){
    console.log(number);
    number++;
}

// 4

let a = 1;
let b = 3;
while(a <= 10){
    console.log(b, "x", a , "=", b * a);
    a ++;
}

// 5

let x = 101;
let y = 2;
while(x <= 111){
    console.log(x, "/", y, "=", x / y);
    x++
}


// Arithmatic Operation using while loop

// 1
let numbers = 50;
while(numbers <= 100){
    console.log(numbers);
    numbers ++;
}

// 2
let num1 =5;
let sum = 0;

while(num1 <= 15){
    sum = sum + num1;
    num1 ++;
}
console.log(sum);


// 3
let roll = 1;
let rollSum = 0;

while(roll <= 50){
    rollSum = rollSum + roll;
    roll ++;
}
console.log(rollSum);


// 4

let num3 = 21;
let Sum3 = 0;

while (num3 <= 50) {
   
   console.log(`Number: ${num3}, Current Sum: ${Sum3}`);
   
    Sum3 += num3;
    num3++;
}

// 5

let nums = 20;
let total = 0;

while(nums <= 40){
    total = total + nums;
    nums ++
}
  console.log(total);


  // For Loop

  // 1

  for(let i = 150; i <= 170; i ++){
    console.log(i);
  }

  // 2

  let rolSum = 0;
  for(let roll = 31; roll <= 58; roll ++){

    rolSum= rolSum + roll;
  }
  console.log(rolSum);


  // 3
  let SumforLoop = 0;
  for(let numb = 25; numb <= 75; numb ++){
    SumforLoop = SumforLoop + numb;

  }
  console.log(SumforLoop);