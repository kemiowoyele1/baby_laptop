
function animalsDisplay(img, animalName, animalSound) {
  hideScreenDisplay();
    otherDisplay.style.display = 'block';
    other1.style.backgroundImage = "url(images/"+ img + ".png)";
   name2.textContent = animalName;
   sound1.src = 'sounds/' + animalSound;
   sound1.play();

}



animal1.addEventListener("click", function(){
  animalsDisplay('bear', 'bear', 'bear.mp3');
})


animal2.addEventListener("click", function(){
  animalsDisplay('cat', 'cat', 'cat.wav');
})


animal3.addEventListener("click", function(){
  animalsDisplay('cow', 'cow', 'cow.wav');
})


animal4.addEventListener("click", function(){
  animalsDisplay('dog', 'dog', 'dog.mp3');
})


animal5.addEventListener("click", function(){
  animalsDisplay('elephant', 'elephant', 'elephant.wav');
})


animal6.addEventListener("click", function(){
  animalsDisplay('goat', 'goat', 'goat.mp3');
})


animal7.addEventListener("click", function(){
  animalsDisplay('lion', 'lion', 'lion.wav');
})
animal8.addEventListener("click", function(){
  animalsDisplay('pig', 'pig', 'pig.mp3');
})
animal9.addEventListener("click", function(){
  animalsDisplay('tiger', 'tiger', 'tiger.mp3');
})
animal10.addEventListener("click", function(){
  animalsDisplay('zebra', 'zebra', 'zebra.mp3');
})
