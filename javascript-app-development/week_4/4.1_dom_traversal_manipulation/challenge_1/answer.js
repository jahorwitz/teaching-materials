//Laziness is your friend...
let q = document.querySelector.bind(document)
let qa = document.querySelectorAll.bind(document);

// Get the header element
q('header');

// Get all the section elements
qa('section');

// Get the section element with class="current"
q('section.current');

// Get the section that comes after the current section
q('section.current').nextElementSibling;

// Get the h2 node from the section before the 'current' section
q('section.current').previousElementSibling.children[0];

// Get the div that contains the section that has an h2 with a class of 'highlight'
q('h2.highlight').parentElement.parentElement;

// Get all the sections that contain an H2 (using a single statement);
let foo = Array.from(qa('section h2')).map(headline => headline.parentElement);
