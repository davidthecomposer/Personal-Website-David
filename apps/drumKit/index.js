/* jshint esversion:6*/


const numberOfDrumButtons = document.querySelectorAll(".drum");



function makeSound(key) {
  switch (key) {
    case 'w':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;
    case 's':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      let tom1 = new Audio('sounds/tom1.mp3');
      tom1.play();
      break;
    case 'j':
      let tom2 = new Audio('sounds/tom2.mp3');
      tom2.play();
      break;
    case 'k':
      let tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;
    case 'l':
      let tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML)
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');
  setTimeout(function() {activeButton.classList.remove('pressed'), 100});
}

for (let obj of numberOfDrumButtons) {
  obj.addEventListener("click", function() {
    // obj.style.color = 'white';
    let buttonInnerHTML = obj.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});