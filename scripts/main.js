/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

alert(multiply(4, 7)); 
alert(multiply(20, 20));
alert(multiply(0.5, 3)); */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/los-dos-pichones.jpg') {
      myImage.setAttribute ('src','images/helix.jpg');
    } else {
      myImage.setAttribute ('src','images/los-dos-pichones.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool??, ' + storedName;
  }
  
  var myButton2 = document.querySelector('button');

  myButton2.onclick = function() {
    setUserName();
  }

