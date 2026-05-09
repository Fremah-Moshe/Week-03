# Falsy Values in JS

Falsy values are values that evaluate to false when used in a Boolean.
JavaScript has a fixed list of falsy values.

# const values = [0, 1, '', 'hello', null, undefined, NaN, [], {}, false, true];

# values.forEach((v) => {

# console.log(`${JSON.stringify(v)} is ${Boolean(v) ? 'truthy' : 'falsy'}`);

# });

- false
- 0 (and -0)
- 0n (BigInt zero)
- "" (empty string)
- null
- undefined
- NaN

# What suprised me in javaScript language that almost everything is truthy. Only 7 values are falsy.

# Task 05

# // BROKEN 1: This should compute 25% of 200 but it does not

     const discount = 200 * 25;
     /*
     The code multiplies by 25, not 25%, JavaScript does not interpret 25 as a percentage.
     */
     const discount = 200 * 0.25; // This solves the bug

# // BROKEN 2: This should print "You are an adult" for age 18

     const age = 18;
     if (age > 18) console.log("You are an adult");
     /*
       The condition > excludes age 18, even though 18 should count as an adult,
       so to get the required output, we use >= (greater than or equal to)
     */
     const age = 18;
     if (age >= 18) console.log("You are an adult"); This will print the required output

# // BROKEN 3: This should concatenate but it adds as numbers

     const a = "5";
     const b = 3;
     console.log(a + b);
     /*
       Type mismatch (string vs number) → fixed via explicit conversion.

       To convert to numbers:
       console.log(Number(a) + b);

      To convert to strings, and this will concatenate and not add as numbers:
      console.log(String(a) + String(b));
     */
