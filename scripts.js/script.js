document.addEventListener("DOMContentLoaded", function () {
  const groceryForm = document.getElementById("groceryForm");
  const itemList = document.getElementById("itemList");

  const groceryItems = [];

  groceryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    itemList.innerHTML = "";

    const selectedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    selectedItems.sort();

    const uppercaseItem = selectedItems.map((item) => item.toUpperCase());

    uppercaseItem.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      itemList.appendChild(listItem);
    });
    groceryForm.style.display = "none";
  });
});

// document.addEventListener("DOMContentLoaded", function(){
//   const form = document.querySelector("form");
//   form.addEventListener("submit", handleForm);
// });

// function handleForm(e){
//   e.preventDefault();
//   const userSelections = document.querySelectorAll("input[name=groceries]:checked");
//   const userSelectionsArray = Array.from(userSelections);
//   const groceries = ["Avocado", "Milk", "Cheese", "Water", "Rice", "Bread"];
//   const alphabetic = groceries.sort();

//   userSelectionsArray.forEach(function(element){
//     const div = document.querySelector("#output");
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");

//   })

// }
