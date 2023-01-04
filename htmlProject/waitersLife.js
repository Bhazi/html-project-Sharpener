const tt = document.getElementById("submit").addEventListener("click", poopo);

function poopo(e) {
  e.preventDefault();
  var price = document.getElementById("price").value;
  var dish = document.getElementById("dishes").value;
  var tableNo = document.getElementById("selecting").value;

  axios
    .post("https://crudcrud.com/api/13ceb55b2d85449886dc7c61ad52cb86/items", {
      price: price,
      dish: dish,
      table: tableNo,
    })
    .then()
    .catch();
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/13ceb55b2d85449886dc7c61ad52cb86/items")
    .then((res) => {
      res.data.forEach((value) => {
        showNewUserOnScreen(value);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

function showNewUserOnScreen(val) {
  if (val.table == "Table 1") {
    var table1 = document.getElementById("table1");
    var paragraph = document.createElement("li");
    paragraph.id = `${val.table}${val.price}`;
    paragraph.style.fontFamily = "verdana";
    paragraph.style.margin = "16px";
    paragraph.style.fontSize = "13px";
    paragraph.style.fontWeight = "450";
    paragraph.style.color = "brown";
    paragraph.textContent = `${val.price} - ${val.dish}`;
    table1.appendChild(paragraph);

    var deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
      deleteUser(val.table, val.price, val._id);
    };
    deleteButton.style.left = "310px";
    deleteButton.style.position = "absolute";
    deleteButton.style.backgroundColor = "rgb(112, 121, 121)";
    deleteButton.style.color = "white";
    deleteButton.style.borderRadius = "13px";
    deleteButton.style.borderColor = "rgb(112, 121, 121)";

    deleteButton.appendChild(document.createTextNode("Delete"));
    paragraph.appendChild(deleteButton);
  }
  if (val.table == "Table 2") {
    var table2 = document.getElementById("table2");
    var paragraph = document.createElement("li");
    paragraph.id = `${val.table}${val.price}`;
    paragraph.style.fontFamily = "verdana";
    paragraph.style.margin = "16px";
    paragraph.style.fontSize = "13px";
    paragraph.style.fontWeight = "450";
    paragraph.style.color = "brown";
    paragraph.textContent = `${val.price} - ${val.dish}`;
    table2.appendChild(paragraph);

    var deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
      deleteUser(val.table, val.price, val._id);
    };
    deleteButton.style.left = "310px";
    deleteButton.style.position = "absolute";
    deleteButton.style.backgroundColor = "rgb(112, 121, 121)";
    deleteButton.style.color = "white";
    deleteButton.style.borderRadius = "13px";
    deleteButton.style.borderColor = "rgb(112, 121, 121)";

    deleteButton.appendChild(document.createTextNode("Delete"));
    paragraph.appendChild(deleteButton);
  }
  if (val.table == "Table 3") {
    var table3 = document.getElementById("table3");
    var paragraph = document.createElement("li");
    paragraph.id = `${val.table}${val.price}`;
    paragraph.style.fontFamily = "verdana";
    paragraph.style.margin = "16px";
    paragraph.style.fontSize = "13px";
    paragraph.style.fontWeight = "450";
    paragraph.style.color = "brown";
    paragraph.textContent = `${val.price} - ${val.dish}`;
    table3.appendChild(paragraph);

    var deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
      deleteUser(val.table, val.price, val._id);
    };
    deleteButton.style.left = "310px";
    deleteButton.style.position = "absolute";
    deleteButton.style.backgroundColor = "rgb(112, 121, 121)";
    deleteButton.style.color = "white";
    deleteButton.style.borderRadius = "13px";
    deleteButton.style.borderColor = "rgb(112, 121, 121)";

    deleteButton.appendChild(document.createTextNode("Delete"));
    paragraph.appendChild(deleteButton);
  }
}

//deleting in the local storage
function deleteUser(tableNumber, price, id) {
  axios.delete(
    `https://crudcrud.com/api/13ceb55b2d85449886dc7c61ad52cb86/items/${id}`
  );
  removeUserFromScreen(tableNumber, price);
}

// removing fromscreen
function removeUserFromScreen(tableNumber, price) {
  if (tableNumber == "Table 1") {
    const parentNode = document.getElementById("table1");
    const childNodeToBeDeleted = document.getElementById(
      `${tableNumber}${price}`
    );
    parentNode.removeChild(childNodeToBeDeleted);
  }
  if (tableNumber == "Table 2") {
    const parentNode = document.getElementById("table2");
    const childNodeToBeDeleted = document.getElementById(
      `${tableNumber}${price}`
    );
    parentNode.removeChild(childNodeToBeDeleted);
  }
  if (tableNumber == "Table 3") {
    const parentNode = document.getElementById("table3");
    const childNodeToBeDeleted = document.getElementById(
      `${tableNumber}${price}`
    );
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
