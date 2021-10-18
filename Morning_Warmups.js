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

})()