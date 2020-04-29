// Find a player with the name 'Mike'
// Get an array of all players with position 'RB'
// Get an array of all the players lastNames
// Get an array of the full names of all the running backs with more than 5 touchdowns
// Get the number of touchdowns scored by Running backs

let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

let mike = players.find(player => player.firstName === "Mike");

// console.log(mike);

let runningBacks = players.filter(player => player.position === "RB");

// console.log(runningBacks);

let lastNames = players.map(player => player.lastName);

// console.log(lastNames);

let successfulRunningBacks = players.filter(player => {
	return player.position === "RB" && player.touchdowns > 5;
}).map(player => {
	return `${player.firstName} ${player.lastName}`;
});

// console.log(successfulRunningBacks);

let total = players.filter(player => player.position === "RB").reduce((sum, current) => {
	return sum + current.touchdowns;
}, 0);

console.log(total);