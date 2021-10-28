(function() {

   function returnSeven() {
       return 7;
   }
    console.log(returnSeven());

   if(false) {
       console.log("Am i seen?");
   } else {
       console.log("What about me?");
   }
   var hadBreakfast = Boolean(Math.round(Math.random()));

   var hadBreakfastMessage = (hadBreakfast) ? "That breakfast is sure good." : "I am veyr full.";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

    for(var i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0)


    function moveToEnd(arr) {
        var removedElement = arr.shift();
        arr.push(removedElement);
        return arr;
    }

    console.log(moveToEnd([1, 2, 3, 4]));
    console.log(moveToEnd(['roll', 'rock', 'rock']))

var mewtwo = {
    name: 'Mewtwo',
    description: 'Short purple alien looking thing with a long tail',
    height: {
        feet:4,
        inches:11
    },
    type: ['Psychic']
}



})()