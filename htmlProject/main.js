var lister = document.getElementById("titleItems");
var headText = document.createElement("p");
headText.id = "headText";
headText.textContent = "Hello";
headText.style.fontSize = "15px";
var ss = document.getElementsByTagName("items");
lister.insertBefore(headText, ss.previousElementSibling);


var container = document.querySelector('header .container')
var itemLister = document.getElementById('header-title');
var text = document.createElement("p");
text.id = "headText";
text.textContent = "Hello";
text.style.fontSize = "26px"
container.insertBefore(text,itemLister)