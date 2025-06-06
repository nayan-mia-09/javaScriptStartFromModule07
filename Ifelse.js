
//1
let backToHome = 6;

if(backToHome <= 6 ){
    console.log("Tor Jonno Nodoles Ranna korchi!");
}else{
    console.log("Tor Jonno Jharur Bari Ache!");
}

//2
let mobileON = true;

if(mobileON == true){
    console.log("Welcome!");
}else{
    console.log("Get Lost!");
}

//3
let run = 3;

if(run === 5){
    console.log("Toke Chocolate Dibo!");
}else{
    console.log("Tor Mota Vuri Hobe!");
}

//4
let result = 85;

if(result > 80){
    console.log("Bike Pabi!");
}else{
    console.log("Bike Pabi Na!");
}

//5
let movieShow = 9;

if(movieShow < 9){
    console.log("Movie Dekhbo!");
}else{
    console.log("Nake Tel Diye Ghumabo!");
}

//6
let temp = 32;

if(temp >= 30){
    console.log("AC ON");
}else{
    console.log("Kombol Muri diye Ghum!");
}


// 01
let age = 19;
let height = 60;

if(age > 18 && height > 60){
    console.log("Gari Dhakka Dibi!");
}else{
    console.log("Bose Thakbi!");
}

// 02
let mathMark = 75 ;
let englishMark = 80;

if(mathMark > 80 && englishMark > 85){
    console.log("You are eligible");
}else{
    console.log("Toke Biye diye Dibo!");
}

//03
let GPA = 5;
let monthlyIncome = 9000;

if(GPA === 5 && monthlyIncome < 10000){
    console.log("Scholorship Pabi!");
}else{
    console.log("Beton Diye Porte Hobe!");
}

//04
let ifAge = 30;
let isExperience = 3;

if(ifAge <= 30 && isExperience > 2){
    console.log("Exam Dite Parbi!");
}else{
    console.log("Exam Dite Parbi Na!");
}

//05
let hasEggNum = 15;
let hasChiken = false;

if(hasEggNum > 12 || hasChiken === false){
    console.log("Dimer Korma Ranna Hobe!");
}else{
    console.log("Kola ruti khete hobe");
}

//06
let bodyTemp = 98;
let hasCaugh = true;

if(bodyTemp > 100 || hasCaugh === true){
    console.log("Go to Doctor!");
}else{
    console.log("Katha Muri Diye Ghuma!");
}

//07
let attendence = 80;
let submitHomeWork = true;

if(attendence > 80 && submitHomeWork === true){
    console.log("Exam Dite Parbi!");
}else{
    console.log("Auto Fail!");
}

//08
let hasBiddut = false;
let mobileCharged = true;

if(hasBiddut === false && mobileCharged === false){
    console.log("Porte Boshbi!");
}else{
    console.log("Game Khelbi!");
}

//09
let shirtPrice = 800;
let hasKuppon = true;

if(shirtPrice > 1000 && hasKuppon === true){
    console.log("Discount Pabi!");
}else{
    console.log("Full Payment Korte Hobe!");
}


// 001
const price = 4500;

if(price >= 3000){
    const discount = price / 100 * 5;
    const pay = price - discount;
    console.log(pay);
}else if (price >= 6000){
    const discount = price / 100 * 15;
    const pay = price - discount;
    console.log(pay);
}else{
    console.log(price);
}

//002

const isAge = 45;

if(isAge < 12){
    console.log("Free food for Child!");
}else if (isAge > 60){
    console.log("50% discount for senior citizen!");
}else{
    console.log("Full Payment!");
}

//003
const balance = 6000;

if(balance < 5000){
    console.log("Bindas Life Chill kor!");
}else if(balance < 1000){
    console.log("Deposit kor!");
}else{
    console.log("You are rich , Marry me!");
}


//004
const examMarks = 60;
if(examMarks < 50){
    console.log("Fail!");
}else if(examMarks > 50){
    console.log("Pass");
}else{
    console.log("A+");
}

//005
const bookPages = 300;
if(bookPages < 100){
    console.log("small book");
}else if(bookPages > 500){
    console.log("heart-attack size book");
}else{
    console.log("Mid-size book.");
}

//006
const Temp = -6;
if(Temp < 0){
    console.log("Ice");
}else if (Temp > 20){
    console.log("Hot hot");
}else{
    console.log("Cool cool");
}

//007
const level = 65;
if(level < 10){
    console.log("novice");
}else if(level > 50){
    console.log("Pro Gamer");
}else{
    console.log("Expert");
}


// 1
const invitation = false;
const hasMoney = 2000
if(invitation === true){
    console.log("Join Friends Party!");
    if(hasMoney > 1000){
        console.log("Join With Gift for friends!");
    }else{
        console.log("Khali hate jabo!");
    }
}else{
    console.log("Remove him my friend list!");
}

// 2
const comeGuest = true;
const wantEatTea = true;
const wantEatBuiscits = false;

if(comeGuest === true){
   if(wantEatTea === true){
    if(wantEatBuiscits === false){
        console.log("Sudhu cha Ready");
    }
   }else{
console.log("Boshe Boshe Star Jolsha Dekho!");    
}
}

// 3
const userActive = true;
const premiumUser = true;
if(userActive === true){
   if(premiumUser === true){
    console.log("Enjoy premium feature!");
   }else{
    console.log("Free Version Dekho!");
   }
}

// 4

const hasFoodOnFrez = true;
const foodAppWorking = false;

if(hasFoodOnFrez === true){
    console.log("Khabar Gorom korbo!");
}else{
    if(foodAppWorking === true){
        console.log("Online Order korbo!");
    }else{
        console.log("Ajke ami roja!");
    }
}

// 5

const guestMember = 150;
const comeWithGift = false;
if(guestMember > 100){
   if(comeWithGift === true){
    console.log("Let's party all night.");
   }else{
    console.log("I wil party with myself");
   }
}