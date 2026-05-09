const price = 1500; // cost per item in KSh
const quantity = 3;
const taxRate = 0.16; // 16% VAT

const subtotal = price * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

// console.log(`Subtotal: KSh ${subtotal}`);
// console.log(`Tax: KSh ${tax}`);
// console.log(`Total: KSh ${total.toFixed(2)}`);

const values = [0, 1, '', 'hello', null, undefined, NaN, [], {}, false, true];
values.forEach((v) => {
  console.log(`${JSON.stringify(v)} is ${Boolean(v) ? 'truthy' : 'falsy'}`);
});

/*
0 is falsy
1 is truthy
"" is falsy
"hello" is truthy
null is falsy
undefined is falsy
null is falsy
[] is truthy
{} is truthy
false is falsy
true is truthy
*/

console.log(0 == false); // true (coerces)
console.log(0 === false); // false (strict)
console.log('' == 0); // true
console.log('' === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(0 == false); // true  → JS coerces both sides: 0 becomes false.
console.log(0 === false); // false → No coercion: number 0 !== boolean false.

console.log('' == 0); // true  → "" is coerced to 0, so 0 == 0.
console.log('' === 0); // false → Different types: string !== number.

console.log(null == undefined); // true  → Special rule: null only equals undefined.
console.log(null === undefined); // false → Different types, no coercion allowed.

const username = ''; // empty string
const displayName = username || 'Anonymous';
console.log(`Hello, ${displayName}`);

const isLoggedIn = true;
isLoggedIn && console.log('Welcome back!');

// BROKEN 1: This should compute 25% of 200 but it does not
const discount = 200 * 25;

// BROKEN 2: This should print "You are an adult" for age 18
const age = 18;
if (age > 18) console.log('You are an adult');

// BROKEN 3: This should concatenate but it adds as numbers
const a = '5';
const b = 3;
console.log(a + b);
