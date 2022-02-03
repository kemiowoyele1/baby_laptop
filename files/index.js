

colors1.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'blue';
   changeScreenColor();
})

colors2.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'green';
   changeScreenColor();
})

colors3.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'pink';
   changeScreenColor();
})

colors4.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'purple';
   changeScreenColor();
})

colors5.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'yellow';
   changeScreenColor();
})

colors6.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'orange';
   changeScreenColor();
})

colors7.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'red';
   changeScreenColor();
})

colors8.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'black';
   changeScreenColor();
})

colors9.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'white';
   changeScreenColor();
})

colors10.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'saddlebrown';
   changeScreenColor();
})

colors11.addEventListener( 'click',function (){ 
    hideScreenDisplay();
   currentColor = 'grey';
   changeScreenColor();
})
link1.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
   numberCase.style.display = 'block';
})
link2.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
   alphabets.style.display = 'block';
})
link3.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
    shapesContainer.style.display = 'block';
})
link4.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
    animalsContainer.style.display = 'block';
})
link5.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
   wordCase.style.display = 'block';
})
link6.addEventListener( 'click',function (){ 
    hideMonitorDisplay();
   vehiclesContainer.style.display = 'block';
})


function changeScreenColor(){
    colorDisplay.style.display = 'block';
    colorDisplay.style.backgroundColor = currentColor;
}
function hideScreenDisplay(){
    alphabetDisplay.style.display = 'none';
    otherDisplay.style.display = 'none';
    colorDisplay.style.display = 'none';
}
function hideMonitorDisplay(){
    numberCase.style.display = 'none';
    alphabets.style.display = 'none';
    wordCase.style.display = 'none';
    shapesContainer.style.display = 'none';
    animalsContainer.style.display = 'none';
    vehiclesContainer.style.display = 'none';
}