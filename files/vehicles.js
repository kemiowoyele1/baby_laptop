
function vehiclesDisplay(img, vehicleName, vehicleSound) {
  hideScreenDisplay();
    otherDisplay.style.display = 'block';
    other1.style.backgroundImage = "url(images/"+ img + ".png)";
   name2.textContent = vehicleName;
   sound1.src = 'sounds/' + vehicleSound;
   sound1.play();

}



vehicle1.addEventListener("click", function(){
  vehiclesDisplay('airplane', 'airplane', 'airplane.mp3');
})


vehicle2.addEventListener("click", function(){
  vehiclesDisplay('ambulance', 'ambulance', 'ambulance.mp3');
})


vehicle3.addEventListener("click", function(){
  vehiclesDisplay('bicycle', 'bicycle', 'bicycle.mp3');
})


vehicle4.addEventListener("click", function(){
  vehiclesDisplay('bus', 'bus', 'bus.mp3');
})


vehicle5.addEventListener("click", function(){
  vehiclesDisplay('car', 'car', 'car2.mp3');
})


vehicle6.addEventListener("click", function(){
  vehiclesDisplay('fire', 'fire-fighter truck', 'fire.mp3');
})


vehicle7.addEventListener("click", function(){
  vehiclesDisplay('helicopter', 'helicopter', 'helicopter.mp3');
})
vehicle8.addEventListener("click", function(){
  vehiclesDisplay('motorcycle', 'motorcycle', 'motorcycle.mp3');
})
vehicle9.addEventListener("click", function(){
  vehiclesDisplay('ship', 'ship', 'ship.mp3');
})
vehicle10.addEventListener("click", function(){
  vehiclesDisplay('train', 'train', 'train.mp3');
})
