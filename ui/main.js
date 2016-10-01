console.log('Loaded!');

//change the content of the file

var element = document.getElementById('main-text');
element.innerHTML = 'This is Great';

//move the dino

var img = document.getElementById('madi');
 var marginLeft = 0;
function moveright(){
 marginLeft = marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';
}
 img.onclick = function() {
  var interval = setInterval(moveright, 50);
};