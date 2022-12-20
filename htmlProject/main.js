var tyt = document.getElementById("addForm");
tyt.addEventListener("submit", rtytty);

function rtytty(e) {
  e.preventDefault();
  var textItem = document.getElementById("item").value;
  var descriptionVal = document.getElementById("description").value;

  let object = {
    name: textItem,
    description: descriptionVal,
  };
  var tt = JSON.stringify(object);
  localStorage.setItem("asa", tt);
}
