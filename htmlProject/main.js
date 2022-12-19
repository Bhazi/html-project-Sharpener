var item2 = document.querySelector("#item2");
item2.style.backgroundColor = "green";
var item3 = document.querySelector("#item3");
item3.style.display = "none";

var items = document.querySelectorAll(".list-group-item");
items[1].style.color = "green";

for (let i = 0; i <= items.length; i++) {
  if (i % 2 == 0) {
    items[i].style.backgroundColor = "green";
  }
}
