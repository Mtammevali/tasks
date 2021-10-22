

const form = document.querySelector("form");

form.addEventListener("submit", addTask);


function addTask(event){
    //get form input data.
    const taskInput = document.querySelector("#task");
    let task = taskInput.value;

    //create list item element.
    const li = document.createElement("li")
    li.className = "collection-item";
    //create text element.
    const text = document.createTextNode(task);
   li.appendChild(text);
   //add list item to UL
    const ul = document.querySelector(".collection");
    ul.appendChild(li);


    event.preventDefault();

}

