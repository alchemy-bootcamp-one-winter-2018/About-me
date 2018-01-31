'use strict';

const intro = prompt('Have you ever had a pet?').toLocaleLowerCase();
if (intro === 'yes' || intro === 'y') {
    alert('That\'s awesome! Pet\'s are so rewarding.');
} else if (intro === 'no' || intro === 'n') {
    alert('I am so sorry that you have never known the joy!');
} else {
    alert('What now?');
}
console.log(intro);

const pet = prompt('What is your ideal pet?');
alert(pet + ' huh? Those are pretty cool. I\'m a dog person myself.');
console.log('Their ideal pet is: ' + pet);

const common = prompt('Are those common where you live?').toLowerCase();
if (common === 'yes' || common === 'y') {
    alert('Thought so, I can\'t imagine a place without a friendly ' + pet + ' around.');
} else if (common === 'no' || common === 'n') {
    alert('How interesting!');
} else {
    alert('What now?');
}
console.log(common);

const breed = prompt('What is the breed of your ' + pet + '?');
alert('A ' + breed + '? Sounds gorgeous! I\'ve never heard of a ' + pet + ' like that before.');
console.log('Their pet\'s breed is: ' + breed);

const pure = prompt('Are you dead set on a pure breed?').toLowerCase();
if (pure === 'yes' || pure === 'y') {
    alert('Nothing wrong with that. Make sure you go through a reputable breeder!');
} else if (pure === 'no' || pure === 'n') {
    alert('Nothing wrong with that. Consider looking into your local shelter or rescue!');
} else {
    alert('What now?');
}
console.log(pure);

const name = prompt('What would you name your ' + breed + '?');
alert('You would name your ' + pet + ' ' + name + '? Well, that\'s all right. To each their own.');
console.log('Their pet\'s name is: ' + name);

const funky = prompt('Are you a fan of funky pet names?').toLowerCase();
if (funky === 'yes' || funky === 'y') {
    alert('There are some pretty clever ones out there and some equally silly ones. I knew a dog once called Chunky Chew.');
} else if (funky === 'no' || funky === 'n') {
    alert('Well, with a ' + pet + ' named ' + name + ' you seem like a more mature pet namer.');
} else {
    alert('What now?');
}
console.log(funky);

const travel = prompt('Would you take your ' + pet + ' ' + name + ' where ever you go?');
alert('I think we should always have our animal companions nearby. Everyone would be way less stressed with a cute ' + breed + ' ' + pet + ' like ' + name + ' around!');
console.log(travel + ', is the response to whether or not they would take their pet everywhere.');

const trip = prompt('Would you consider taking your ' + pet + ' on trips?').toLowerCase();
if (trip === 'yes' || trip === 'y') {
    alert('I know I love having my dog buddy on vacation. He loves the beach especially.');
} else if (trip === 'no' || trip === 'n') {
    alert('Poor ' + name + ', you\'ve got them on a tight leash! Pun intended ;p');
} else {
    alert('What now?');
}
console.log(trip);