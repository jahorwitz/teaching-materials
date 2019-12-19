// Prototypes


// Create a `time` variable and set it to 0
// Create a `gravity` variable and set it to 0.5
// Extend the particle class from earlier with a prototype object.
// Create a prototype object that contains:
//     A property of `getVelocity()` that returns the value (time * gravity)
//     A property of `move()`
//         `move()` should add the value from `getVelocity()` to the existing `y` position
//         If and when `y >= 500` `move()` should instead do the following: `console.log('bottom')`  
// use your existing array and for loop to create a particles array
// Use `setInterval` at 100ms to
//     increment the global `time` variable by 1
//     `console.log` all the particle's `x` values
//     also `return` an array with all of the `y` values that are less than 500 (`y < 500`)
//     take the array with `y` values  
//         call the `move()` function on EACH item

