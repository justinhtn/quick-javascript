const createTask = () => {
    // grab input
  
    let inputValue = document.querySelector(".input").value;
  
    // create list item container
  
    let newItem = document.createElement("div");
    newItem.className = "listItem";
  
    // create remove button and icon
  
    let removeButton = document.createElement("div");
  
    removeButton.className = "removeButton";
    removeButton.innerHTML =`
    <span class="material-icons">
        close
    </span>`
  
    // create text node
  
    newItem.appendChild(document.createTextNode(inputValue));
    newItem.appendChild(removeButton);
  
    // add new list item to list
    if (inputValue != "") {
      taskList.appendChild(newItem);
      clear();
    } else {
      console.log("Nothing to add");
    }
  
    let allRemoveButtons = document.querySelectorAll(".removeButton");
  
    for (i = 0; i < allRemoveButtons.length; i++) {
      allRemoveButtons[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }
  };
  
  document.getElementById("button").addEventListener("click", createTask);

  
  const clear = () => {
    document.querySelector(".input").value = "";
    console.log("asdffaaf");
  };


  