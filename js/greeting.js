var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
	greeting = 'Good evening! Thanks for visiting!';
} else if (hourNow > 11){
	greeting = 'Good afternoon! Thanks for visiting!';
} else if (hourNow > 0){
	greeting = 'Good morning! Thanks for visiting!';
} else {
	greeting = 'Welcome! Thanks for visiting!';
}

document.write('<h3>' + greeting + '</h3>');