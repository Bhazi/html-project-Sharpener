var tyt = document.getElementById("addForm");
tyt.addEventListener('submit',rtytty);

function rtytty(e){
  e.preventDefault();
  var textItem = document.getElementById("item").value;
  localStorage.setItem('name',textItem)
}
