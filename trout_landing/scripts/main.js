var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ulik.jpg'){
    	myImage.setAttribute('src','images/ulak.jpg')
    }
    else{
    	myImage.setAttribute('src','images/ulik.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Пожалуйста введите свое имя');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = myName + ', благодарю за просмотр моего резюме';
}


if(!localStorage.getItem('name')){
	setUserName();
}
else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = storedName + ', благодарю за просмотр моего резюме';
}


myButton.onclick = function(){
	setUserName();
}