// 1. A const holding your full name as a string
const fullName = 'Fredrick Omondi';

// 2. A const holding your age as a number
const age = 27;

// 3. A const holding your current level of JavaScript comfort as a boolean
const isComfortableWithJS = true;

// 4. A let holding a placeholder (starting with null, because null clearly signals
//    “intentional empty value” while undefined often means “not yet declared”)
let futureGoal = null;

// 5. A const holding an array of at least three strings
const favouriteLanguages = ['JavaScript', 'Python', 'Ruby'];

// 6. A const holding an object with city and country
const locationInfo = {
  city: 'Riyadh',
  country: 'Saudi Arabia',
};

// 7. A template literal using name and city
const introSentence = `${fullName} currently lives in ${locationInfo.city}.`;
console.log(introSentence);

// 8. typeof checks on at least three variables
console.log(typeof fullName); // string
console.log(typeof age); // number
console.log(typeof isComfortableWithJS); // boolean

// 9. Reassign the let from step 4, log before and after
console.log('Before reassignment:', futureGoal);
futureGoal = 'Become a strong full‑stack engineer';
console.log('After reassignment:', futureGoal);

// 10. Intentionally try to reassign a const (this will throw an error)
// favouriteLanguages = ["Go", "Rust"]; // ❌ ERROR: Assignment to constant variable

console.log(typeof null); // return type as an Object

function buildProfile(name, age, city, languages) {
  return `Name: ${name}
Age: ${age}
City: ${city}
Languages: ${languages.join(', ')}`;
}

console.log(
  buildProfile('Wanjiru', 22, 'Nairobi', [
    'English',
    'Kiswahili',
    'JavaScript',
  ]),
);

/*
Task 4: Drills
What to do: In the same file, complete these drills. Write, test, and commit:

1- Declare a let variable. Assign it three different types in sequence (number, string, boolean). 
2- Log typeof after each assignment. Write a comment observing that JavaScript is dynamically typed.
3- Create two strings and concatenate them using +. Then do the same join using a template literal. Compare the readability in a comment.
4- Create an object with a property whose value is a function. Call that function from the object using dot notation.
5- Expected output: Three separate sections in main.js, each with its drill and a one-line comment observation.

*/

let value;
value = 42;
console.log(typeof value); // number

value = "Now I'm a string";
console.log(typeof value); // string

value = false;
console.log(typeof value); // boolean

const first = 'Hello';
const second = 'World';

const joinedPlus = first + ' ' + second;
console.log(joinedPlus);

const joinedTemplate = `${first} ${second}`;
console.log(joinedTemplate);

const tools = {
  greet: function () {
    console.log('Function inside an object works!');
  },
};

tools.greet(); // calling the function using dot notation

// JavaScript Objects can hold functions like this.

console.log(Number.isInteger(10)); // true  → it's a whole number
console.log(Number.isFinite(3.14)); // true  → it's a real, finite number
console.log(Number.isNaN(NaN)); // true  → NaN is literally "Not a Number"

// JS has different checks because NaN behaves weirdly and == can be misleading.

console.log(0 == false); // true  → JS does type coercion
console.log('1' == 1); // true  → string gets converted to number

console.log(0 === false); // false → no type coercion
console.log('1' === 1); // false → different types

// === is preferred because it avoids weird coercion surprises.

const settings = {
  theme: 'light',
  version: 1,
};

Object.freeze(settings);

// Try to mutate
settings.theme = 'dark'; // silently fails in non‑strict mode
console.log(settings.theme); // still "light"

// Frozen objects can't be changed — JS just ignores the mutation.
