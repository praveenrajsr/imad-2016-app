console.log('Loaded!');

//change the content of the file

var element = document.getElementById('main-text');
element.innerHTML = 'This is Great';

//move the dino

var img = document.getElementById('madi');
function moveright(){
 var marginLeft = 0;
 marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';
}
 img.onclick = function() {
  var interval = setInterval(moveright, 50);
};