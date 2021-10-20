(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The sun')''

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');

    console.log('Removing "The Sun" from the beginning of the planets array.');
    var removeSun = planets.shift();
    console.log('The sun has been removed... Whered everyone go?' + removeSun);

    console.log('Removing "Pluto" from the end of the planets array.');
    var noPluto = planets.pop();
    console.log('Pluto has now been removed.' + noPluto);

    console.log('Finding and logging the index of "Earth" in the planets array.');

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    console.log("Sorting the planets array.");
    console.log(planets);
})();
