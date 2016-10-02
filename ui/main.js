/*console.log('Loaded!');

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
};*/

//counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //make a request to the counter end point
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};





