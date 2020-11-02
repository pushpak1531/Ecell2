/*-------------------particle js background------------------*/

particlesJS.load('particles-js', 'particles.json', function() {
  
});

/*-------------------navigation menu-----------------*/
let bars = document.querySelector(".fa-bars");
let cross = document.querySelector(".fa-times");
let nav = document.querySelector(".nav-menu");

let About = document.getElementsByClassName("about-us");
let Gallery = document.getElementsByClassName("gallery");
let Team = document.getElementsByClassName("team");

let about = document.getElementById("about");
let events = document.getElementById("events");
let gallery = document.getElementById("gallery");
let team = document.getElementById("team");

/*-----menu appering and disappearing---------*/
bars.addEventListener("click", () => {
  bars.style.display = "none";
  nav.style.display = "block";
});

cross.addEventListener("click", () => {
  nav.style.display = "none";
  bars.style.display = "block";
});
