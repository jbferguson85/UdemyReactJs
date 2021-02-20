// arguments object -- no longer bound in arrow

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

// no this keyword in arrow functions

const user = {
    name: 'JB',
    cities: [
        'Grand Island',
        'Omaha'
    ],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}!`);
    }

}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number => number * this.multiplyBy));
    }
}

console.log(multiplier.multiply());