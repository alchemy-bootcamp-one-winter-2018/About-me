'use strict';

function havePets() {
    const intro = prompt('Have you ever had a pet?').toLowerCase();
    if (intro === 'yes' || intro === 'y') {
        alert('That\'s awesome! Pet\'s are so rewarding.');
    } else if (intro === 'no' || intro === 'n') {
        alert('I am so sorry that you have never known the joy!');
    } else {
        alert('What now?');
    }
    console.log(intro);
}

havePets();

const pet = prompt('What is your ideal pet?');
alert(pet + ' huh? Those are pretty cool. I\'m a dog person myself.');
console.log('Their ideal pet is: ' + pet);

function commonPets() {
    const common = prompt('Are those common where you live?').toLowerCase();
    if (common === 'yes' || common === 'y') {
        alert('Thought so, I can\'t imagine a place without a friendly ' + pet + ' around.');
    } else if (common === 'no' || common === 'n') {
        alert('How interesting!');
    } else {
        alert('What now?');
    }
    console.log(common);
}

commonPets();

const breed = prompt('What is the breed of your ' + pet + '?');
alert('A ' + breed + '? Sounds gorgeous! I\'ve never heard of a ' + pet + ' like that before.');
console.log('Their pet\'s breed is: ' + breed);

function pureBreed() {
    const pure = prompt('Are you dead set on a pure breed?').toLowerCase();
    if (pure === 'yes' || pure === 'y') {
        alert('Nothing wrong with that. Make sure you go through a reputable breeder!');
    } else if (pure === 'no' || pure === 'n') {
        alert('Nothing wrong with that. Consider looking into your local shelter or rescue!');
    } else {
        alert('What now?');
    }
    console.log(pure);
}

pureBreed();

const name = prompt('What would you name your ' + breed + '?');
alert('You would name your ' + pet + ' ' + name + '? Well, that\'s all right. To each their own.');
console.log('Their pet\'s name is: ' + name);

function funkyName() {
    const funky = prompt('Are you a fan of funky pet names?').toLowerCase();
    if (funky === 'yes' || funky === 'y') {
        alert('There are some pretty clever ones out there and some equally silly ones. I knew a dog once called Chunky Chew.');
    } else if (funky === 'no' || funky === 'n') {
        alert('Well, with a ' + pet + ' named ' + name + ' you seem like a more mature pet namer.');
    } else {
        alert('What now?');
    }
    console.log(funky);
}

funkyName();

function petTrips() {
    const trip = prompt('Would you consider taking your ' + pet + ' on trips to faraway places?').toLowerCase();
    if (trip === 'yes' || trip === 'y') {
        alert('I know I love having my dog buddy on vacation. He loves the beach especially.');
    } else if (trip === 'no' || trip === 'n') {
        alert('Poor ' + name + ', you\'ve got them on a tight leash! Pun intended ;p');
    } else {
        alert('What now?');
    }
    console.log(trip);
}

petTrips();

let result = 0;

function beachTrips() { 
    for (let i = 0; i < 4; i++) {
        const beach = parseInt(prompt('My dog\'s name is Journey by the way. Can you guess how many times I\'ve taken him to the beach?'));
        if (beach === 0) {
            console.log('Beach is: ' + beach);
            alert('Try again!' );
        } else if (beach > 6) {
            console.log('Beach is: ' + beach);
            alert('Maybe someday!');
        } else if (beach < 6) {
            console.log('Beach is: ' + beach);
            alert('Try a little higher.');
        } else if (beach === 6) {
            console.log('Beach is: ' + beach);
            alert('You got it! He loves to jump into those waves.');
            result++;
            break;
        }
    }
}

beachTrips();

function petKinds() {
    const myPets = ['snake','cat','hampster'];
    for (let count = 1; count <= 6; count++) {
        const guess = prompt('Can you guess what other pet\'s I have or have had? Hint: They definately would not have liked the beach.');
        if (myPets.includes(guess)) {
            console.log(guess + ' was one of my current/previous pets');
            alert('Good Work! Right now I have a snake named Opalescence, a cat named Lynx, and an evil hampster named Chomper. Bet you can\'t guess why.');
            result++;
            break;
        } else if (count > 5) {
            console.log('Did not guess my current/previous pets');
            alert('You were so close on a few! Right now I have a snake named Opalescence. I once had a cat named Lynx and an evil hampster named Chomper. Bet you can\'t guess why.');
            break;
        } else if (myPets.indexOf(guess) == -1) {
            console.log(guess + ' was not one of my current/previous pets');
            alert('Sorry, I\'ve never had one of those before. You have made ' + count + ' of 6 guesses!');
        }
    }
}

petKinds();

if (result == 1) {
    alert('You got ' + result + ' out of 2 questions. Not bad.');
} else if (result == 2) {;
    alert('You got ' + result + ' out of 2! You know me so well.');
}