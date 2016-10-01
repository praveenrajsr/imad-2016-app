console.log('Loaded!');

//change the content of the file

var element = document.getElementById('main-text');
element.innerHTML = 'This is Great';

//move the dino
var img = document.getElementById('madi');
 img.onClick = function() {
  img.style.marginLeft = '200px';  
};