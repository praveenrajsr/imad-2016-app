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
button.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
      }  
    };
    //make the request
    request.open('GET' , 'http://praveenrajsr.imad.hasura-app.io/counter' , true);
    request.send(null);
    
};





