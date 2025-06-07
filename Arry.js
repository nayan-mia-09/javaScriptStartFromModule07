// 1

const numbers = [71,72,73,74,75,76,77,78,79]
console.log(numbers);
console.log(numbers.length);

// 2
const fruits = [ "Apple", "Banana", "Orange", "Mango", "Guava"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[4]);

// 3
const Vegetables = ["Potato", "Onion", "Brinjal", "Radish",
     "Carrot", "Tomato", "Ledis Finger", 
     "Bottle gourd", "Cucumber", "Pointed gourd"]

console.log(Vegetables.length);   

// 4
const favMovie = ["3 Idiots", "12th Fail", "Life Partner", "Borbad", "I Love You"]
console.log(favMovie);

// 5

const oddNumbers = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
console.log(oddNumbers);

// 6

const colors = ["Yellow", "Blue", "White", "Black", "Pink", "Green"];
console.log(colors.length);


// 7

const cityName = ["Dhaka", "Delhi", "Riyad", "Kualalampur","Madrid","Zurich"];
console.log(cityName.length);


// 01
const friendsName = ["Omor", "Sakil", "Faijul", "Sumon", "Siam", "Parvej", "Masum"];
console.log(friendsName[3]);

// 02
const favBooks = ["Atomic Habits", "Deep Work", "Emotional Inteligent",
     "The Power Of Descipline", "Marhaba JavaScript a Maro Thaba", "Bela Furabar Age",
      "English Memory", 
    ]
console.log(favBooks[5]);

// 03
const number = [1,2,3,4,5,6,7,8,9,10];

number[7] = 30;
console.log(number);

// 04
const game = ["Free Fire", "PUBG", "Candy Crush", "Temple Run"];

game[2] = "Subway Surfer";
console.log(game);

// 05
const familyMembers = ["Md Nur Islam", "Nurjahan Begum", "Munni", "Nayan"];
console.log(familyMembers[3]);

// 06
const dreamCountry = ["Switzerland", "Norway", "Denmark", "Sewden", "Spain","UK","USA"];
console.log(dreamCountry[4]);

// 07 
const onTheTable = ["Books", "Pen", "Nail Cutter", "Monitor", "CPU", "Speaker", "Headphone", "Sticy Note"];
console.log(onTheTable[7]);


// 001
const NumArry = [10,20,30,40,50];

NumArry.push(60);
console.log(NumArry);

// 002
const NameArry = ["Sojib", "Sagor", "Sakib", "Sohel"];

NameArry.push("Sumon");
console.log(NameArry);

// 003
const Game = ["Free Fire", "PUBG", "Candy Crush"];

Game.pop()
console.log(Game);

// 004
const EvenNum = [24,36,48,60];

EvenNum.unshift(12);
console.log(EvenNum);

// 005
const Book = ["Atomic Habits", "Deep Work", "Recharge Your Down Battary", "Tukunjil", "Bela Furabar Age"];
Book.shift();
console.log(Book);

//1

const fruitsArry = ["Apple", "Banana","Mango", "Lichi"];
if(fruitsArry.includes("Mango")){
    console.log("Mango Ache");
}else{
    console.log("Mango Nai!");
}

//2

const manName = ["Babul", "Alif", "Choton"];
console.log(manName.indexOf("Babul"));

//3

const friendsList = ["Rimon", "Rifat", "Rajib"];
console.log(friendsList.indexOf("Rifat"));

//4

const CityNames = ["Dhaka", "Chittagong", "Sylhet","rajshahi"]
console.log(CityNames.indexOf("Rajshahi"));

//5

const Arry = ["Megh", "Dighi", "Bisti", "Borsha"];
if(Arry.includes("Bisti")){
    console.log("I need umberalla");
}else{
    console.log("No Rain No Pain");
}

//6

const favGame = ["Football", "Cricket", "Vollyball",];
console.log(favGame.includes("Badminton"));