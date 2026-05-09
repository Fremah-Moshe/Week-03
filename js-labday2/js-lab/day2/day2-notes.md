# console.log(typeof null); // returns type as an Object

When I tried console.log(typeof null), the output I got was "object", which honestly confused me at first during my early days of learning JavaScript

I learned this is one of JavaScript’s oldest and most famous quirks — it’s basically a bug from the early days that never got fixed.

JavaScript keeps it this way because changing it now would break a lot of old code that depends on the current behavior.

If I think about it logically, the type of null should really be "null", because it represents an empty or intentional “nothing” value, not an object.

So even though the output is weird, it’s just something I have to remember as part of JavaScript’s history.

# Try to explain this in your own words first. If stuck after 15 minutes, ask AI and record it in AI_AUDIT.md.

The output of typeof null is "object", even though null is not an object.

This is a famous JavaScript quirk caused by an old bug from the early days of the language.

The bug was never fixed because it would break a lot of existing code.

Logically, the type of null should be "null" because it represents an intentional empty value.
