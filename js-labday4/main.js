/*
A function gradeFor(score) that takes a score 0-100 and returns a letter grade (A >= 90, B >= 80, C >= 70, D >= 60, F < 60).
*/

function gradeFor(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
console.log(gradeFor(85));

/*
A function seasonFor(month) (1-12) that returns "Long rains", "Cool dry", "Short rains", or "Hot dry" based on Kenyan seasons.
*/

function seasonFor(month) {
  if (month >= 3 && month <= 5) return 'Long rains';
  if (month >= 6 && month <= 8) return 'Cool dry';
  if (month === 9 || month === 1 || month === 2) return 'Hot dry';
  if (month >= 10 && month <= 12) return 'Short rains';
  return 'Invalid month';
}

console.log(seasonFor(1));

/*
A function canVote(age, citizenship) that returns true only if age >= 18 AND citizenship is "Kenyan".
*/

function canVote(age, citizenship) {
  return age >= 18 && citizenship === 'Kenyan';
}

console.log(canVote(22, 'Kenyan'));

/*
Write a function dayOfWeek(num) that returns the day name for numbers 1-7 (1=Monday). Write it once with switch
*/
function dayOfWeek(num) {
  switch (num) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  }
}

console.log(dayOfWeek(2));
console.log(dayOfWeek(4));

/*
Write a function dayOfWeek(num) that returns the day name for numbers 1-7 (1=Monday). Write it once with a if/else if chain
*/
function dayOfWeek(num) {
  if (num === 1) return 'Monday';
  else if (num === 2) return 'Tuesday';
  else if (num === 3) return 'Wednesday';
  else if (num === 4) return 'Thursday';
  else if (num === 5) return 'Friday';
  else if (num === 6) return 'Saturday';
  else if (num === 7) return 'Sunday';
  else return 'Invalid day';
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(9));

/* Use a for loop to print numbers 1 to 20. */
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/* Use a while loop to count down from 10 to 1.*/ let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

/* Use a do...while loop that runs at least once even when its condition is false from the start.*/

let x = 0;

do {
  console.log('This runs at least once!');
  x++;
} while (x < 0);

/* Use a for loop with break that stops at the first multiple of 7 between 1 and 100. */

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log('First multiple of 7:', i);
    break;
  }
}

/* Use a for loop with continue that prints only odd numbers from 1 to 20. */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  console.log(i);
}

/*FizzBuzz for 1 to 30: print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number otherwise*/

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
