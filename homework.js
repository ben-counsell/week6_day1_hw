// episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

// i think it'll return 'the murderer is miss scarlet'

//episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// it'll not be able to change the murderer variable on line 28
// because it's immutable. so it'll either be an error or 'the
// murderer is professor plum' 

// episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// first verdict: mrs peacock
// second verdict: professor plum

// episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// colonel mustard

// episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// the weapon is the revolver

// episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    murderer = 'Mrs. White';
}

plotTwist();
}

const declareMurderer = function () {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// the murderer is mrs white? it seems like the plotTwist function
// is both defined and called within the changeMurderer function?

// episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// the murderer is miss scarlet

//episode 8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// the weapon is candle stick

//episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// the murderer is professor plum

// extension

const scenario = {
    murderer: 'miss scarlet',
    room: 'office',
    weapon: 'knife'
}

const plotTwist = function(weapon) {
    if (scenario.weapon === weapon) {
        scenario.murderer = 'professor plum'
        scenario.weapon = 'stapler'
    }
    const addVictim = function() {
        if (scenario.weapon === 'stapler') {
            scenario.victim = 'mrs. white'
        }
    }
    addVictim()
}

plotTwist('knife')

const declareVictim = function() {
    return `the victim is ${scenario.victim}`
}

const verdict = declareVictim()
console.log(verdict)
// the victim is mrs. white