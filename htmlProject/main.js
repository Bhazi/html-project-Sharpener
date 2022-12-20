var item1 = document.querySelectorAll(".list-group-item");
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

for (let i = 0; i < item1.length; i++) {
  var item = document.querySelectorAll(".list-group-item")[i];
  var button = document.createElement("button");
  button.id = "button";
  button.className = "btn btn-sm float-right";
  button.appendChild(document.createTextNode("Edit"));
  button.style.marginRight = "12px";
  item.appendChild(button);
}

// // Form submit event
// form.addEventListener("submit", addItem);
// // Delete event
// itemList.addEventListener("click", removeItem);
// // Filter event
// filter.addEventListener("keyup", filterItems);

// // Add item
// function addItem(e) {
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById("item").value;
//   var va = document.getElementById("description").value;

//   // Create new li element
//   var li = document.createElement("li");
//   // Add class
//   li.className = "list-group-item";
//   // Add text node with input value
//   var newText = document.createTextNode(newItem);
//   var description = document.createTextNode(" " + va);

//   li.appendChild(newText);
//   li.appendChild(description);

//   // Create del button element
//   var deleteBtn = document.createElement("button");

//   // Add classes to del button
//   deleteBtn.className = "btn btn-danger btn-sm float-right delete";

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode("X"));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);

//   //Creating new button for Edit
//   var button = document.createElement("button");
//   button.id = "button";
//   button.className = "btn btn-sm float-right";
//   button.appendChild(document.createTextNode("Edit"));
//   button.style.marginRight = "12px";
//   li.appendChild(button);
// }

// // Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure?")) {
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName("li");

//   // Convert to an array
//   Array.from(items).forEach(function (item) {
//     var itemName = item.firstChild.textContent;
//     var textDesc = item.childNodes[1].textContent;
//     if (
//       itemName.toLowerCase().indexOf(text) != -1 ||
//       textDesc.toLowerCase().indexOf(text) != -1
//     ) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }


var tyt = document.getElementById("addForm");
tyt.addEventListener('submit',rtytty);

function rtytty(e){
  e.preventDefault();
  var textItem = document.getElementById("item").value;
  localStorage.setItem('name',textItem)
}
