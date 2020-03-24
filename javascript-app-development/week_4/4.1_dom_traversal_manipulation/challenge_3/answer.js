// Using jQuery:

// Get the top-level header element
$("header");

// Get all the section elements
$("section").find("*");

// Get the section element with class="current"
let current = $(".current");

// Get the section that comes after the current section
current.next();

// Get the h2 node from the section before the 'current' section
current.prev().find("h2")[0];

// Get the div that contains the section that has an h2 with a class of 'highlight'
$(".highlight").parent().parent();

// Get all the sections that contain an h2 and store them in an Array
let allH2 = Array.from($("section").find("h2"));