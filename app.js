
// event elements
const form = document.querySelector('form');
const taskList = document.querySelector('.collection');

// events
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this task?')){
            event.target.parentElement.remove();
        }
    }
}

function addTask(event){
    // get form input data
    const taskInput = document.querySelector('#task');
    let task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    // add css class
    li.className = 'collection-item';
    // create text element
    const text = document.createTextNode(task);
    // add text to <li>
    li.appendChild(text);
    // create <a> element
    const link = document.createElement('a');
    // add css class
    link.className = 'secondary-content';
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    li.appendChild(link);
    // add li to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    taskInput.value ="";
    event.preventDefault();
}








