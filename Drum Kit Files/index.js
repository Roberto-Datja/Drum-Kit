/* ------------------Detecting  Button Press     ----------------------------*/
//pra selektojme te gjithe butonat me class drum
n = document.querySelectorAll(".drum").length;
for (var i=0; i<n; i++ ){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML; //jep textin   <button class="w drum">textin</button>
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


/* ------------------Detecting  KeyBoard Press     ----------------------------*/
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  /*
  Psh nese shtyp w, atehere
  |event| do te jep rreshtin e meposhtem:
  KeyboardEvent {isTrusted: true, key: 'W', code: 'KeyW', location: 0, ctrlKey: false, …}
  |event.key| do te jep:
  shkronjen w
  */
  });


/* ---------Funksioni qe vendos muziken ne baze te textitHTML(ne rastin tone nje nga ato 7 shkronjat  ) -------*/
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

/* ------------------Funksion qe shton nje background tek butoni aktiv(selektuar)   ----------------------------*/
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");//shton

  setTimeout(function() {
    activeButton.classList.remove("pressed");//e heq pas 0.1 sekondi
  }, 100);

}