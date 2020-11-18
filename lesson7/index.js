let spaceship = {
    color: 'gold',
    'Fuel type': 'disel',
    hellow: function() { alert('hellow') },
    hello() {
        console.log('hello');
    }
};
let userIntrest = 'color';
console.log(spaceship.color);
console.log(spaceship['Fuel type'])

spaceship[userIntrest]
spaceship.color = 'red';


delete spaceship.color;
spaceship.hello()

spaceship = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};
console.log(spaceship.nanoelectronics.['back-up'].terabytes);


const spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
};

let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color


let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};
// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};