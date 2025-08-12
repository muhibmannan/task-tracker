/* Day 1 – VARIABLES & STRINGS*/

let name = 'Muhib';
console.log(name);

let interestRate = 0.3;
console.log(interestRate);

let firstName = 'Muhib';
let lastName = 'Mannan';
console.log(firstName + ' ' + lastName);
console.log(`Hello, my name is ${firstName} ${lastName}`);



/* Day 2 – LOOPS & CONDITIONS */

for (let i = 0; i < 5; i++) {
    console.log('Hello World')
}

for (let i = 1; i <= 5; i++) {
    console.log('Hello World', i)
}

for (let i = 5; i >= 1; i--) {
    console.log('Hello World', i)
}

for (let i = 5; i >= 1; i--) {
    if(i % 2 !==0) console.log(i);
}

/*Practice: Create a JS script that:

- Asks for a number (via prompt)

- Loops from 1 to that number

- Prints only even numbers to the console*/

const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));
console.log("You entered:", number);

for (let i = 1; i <= number; i++) {
    if(i %2 == 0) console.log(i)
}