// // 3.0
//
var returnOfAlert =alert("Welcome to my Website" + "!")
console.log(returnOfAlert);

var returnOfFavoriteColor = prompt("Whats your Favorite Color");
console.log( returnOfFavoriteColor);

var MyfavoriteColor = alert("My favorite color is blue too");
console.log(MyfavoriteColor);

alert("To rent a movie it is three dollars a day");
var Price = 3;

var LittleMermaid = parseFloat(prompt("How long are you going to rent The little Mermaid for?"));
console.log(LittleMermaid);

var BrotherBear = parseFloat(prompt("How long are you going to rent Brother Bear for?"));
console.log(BrotherBear);
//
var Hercules = parseFloat(prompt("How long are you going to rent Hercules for?"));
console.log(Hercules);

var Answer = (LittleMermaid + BrotherBear + Hercules) * Price;
alert("your total is " + Answer.toFixed(2)+".");

// // 3.1
//
var Google = parseFloat(prompt("How much does Google pay?"));
console.log(Google);
var Googlehr = parseFloat(prompt("How much hours do you have ?"));
console.log(Googlehr)
//var Google = 400;
//var Googlehr = 6;
var googlePay = (Google * Googlehr);

var Amazon = parseFloat(prompt("How much does Amazon Pay?"));
console.log(Amazon);
var Amazonhr = parseFloat(prompt("How much hours do you have ?"));
console.log(Amazonhr);
//var Amazon = 380;
//var Amazonhr = 4;
var amazonPay = (Amazon + Amazonhr);
//
var Facebook = parseFloat(prompt("How much does Facebook Pay?"));
console.log(Facebook);
var facebookHr = parseFloat(prompt("How much hours do you have?"));
console.log(facebookHr);
var facebookHr = 10;
var Facebook = 350;
var facebookPay = (facebookHr + Facebook);

var totalPay = (facebookPay + amazonPay + googlePay);
alert("Your total pay is " + totalPay);
//
// // 3.2 ---- The Happy Friday
//
var isClassFull = confirm("Is this class full at 8am?");

var areYouFree = confirm("Are you free to take this class at 8 am?");
alert("Eligible to register for class: " +(isClassFull && areYouFree));

// 3.4 ---
var clubMember = confirm('are you apart of Sams club?')


var howManyItems = parseFloat(prompt("How much items do you have"));


var minItems = confirm("Do you have the minimum amount of Items?");

var discount = alert("discount granted");


