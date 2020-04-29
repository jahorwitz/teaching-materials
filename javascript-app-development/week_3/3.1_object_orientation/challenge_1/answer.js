// Write a 'Particle' Constructor Function

// The constructor takes `startX` and `startY` parameters
// Particle will have a property of `x` that defaults to the value of the argument `startX`
// Particle will have a property of `y`that defaults to the value of the argument `startY`
// Create an empty array named `particles`
// Write loop to create 100 particles
//     x values will be assigned from 0-99
//     y will be random from 0 to 500 (`Math.random()*500`)

function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
}

let particles = [];

for(let i = 0; i < 10; i++) {
    let newParticle = new Particle(i, Math.random() * 500);
    particles.push(newParticle);
}

console.log(particles)