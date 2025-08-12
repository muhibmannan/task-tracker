/* Day 1 – JavaScript Basics: Variables & Strings*/

let name = 'Muhib';
console.log(name);

let interestRate = 0.3;
console.log(interestRate);

let firstName = 'Muhib';
let lastName = 'Mannan';
console.log(firstName + ' ' + lastName);
console.log(`Hello, my name is ${firstName} ${lastName}`);



/* Day 2 (Today) – JavaScript Basics: Loops & Conditions */

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