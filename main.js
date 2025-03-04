// Select All Elements

let allSpans = document.querySelectorAll(".buttons span");
let result = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

// Adds click events to all spans to handle check, add, delete, and show actions.
allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    // Check Item Button
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    // Add Item Button
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    // Delete Item Button
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    // Show Item Button
    if (e.target.classList.contains("show-items")) {
      showItems();
    }

    theInput.value = "";
  });
});

// This function checks if the input field is empty.
// If it is empty, it shows a message saying "Input can not be empty".
function inputCheck() {
  if (theInput.value === "") {
    result.innerHTML = "Input can not be empty";
  }
}

// Checks if input is not empty, then searches for it in local storage and shows the result.
function checkItem() {
  console.log("check");

  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      result.innerHTML = `Local storage item found => <span>${theInput.value}</span>`;
    } else {
      result.innerHTML = `<span>${theInput.value}</span> not found`;
    }
  }

  inputCheck();
}

// Adds the input value to local storage and shows a confirmation message.
function addItem() {
  console.log("add");

  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "test");

    result.innerHTML = `Local storage item added => <span>${theInput.value}</span>`;
  }

  inputCheck();
}

// Deletes the input value from local storage if it exists.
function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);

      result.innerHTML = `Local storage item deleted => <span>${theInput.value}</span>`;
    } else {
      result.innerHTML = `Local storage item is not found to delete => <span>${theInput.value}</span>`;
    }
  }

  console.log("delete");
  inputCheck();
}

function showItems() {
  result.innerHTML = ""; // Clear previous results

  if (localStorage.length > 0) {
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="keys"> ${key} </span>`;
    }
  } else {
    result.innerHTML = `<span>There is no data to show</span>`;
  }

  console.log("show");
  // inputCheck();
}
