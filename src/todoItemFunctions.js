
// toggles the check box of the todo item and dims the icons / text
export function toggleCheckBox(e) {

    const toDo = e.target.parentElement;
    const toDoItems = toDo.children;
    
    // todo checkbox
    toDoItems[0].classList.toggle('todo__complete-checked');
    // todo title
    toDoItems[1].classList.toggle('todo__title-checked');
    // todo details button
    toDoItems[2].classList.toggle('todo__detail-checked');
    // todo date
    toDoItems[3].classList.toggle('todo__date-checked');
    // todo delete icon
    toDoItems[4].classList.toggle('todo__icon-checked');
    
}

// creates a todo item object
export function toDoItemFactory(name, priority, date) {
    return {
        name,
        priority,
        date
    }
}

// renders todo items to the screen 
export function renderToDos(toDoList, element) {

    element.innerHTML = "" 

    toDoList.forEach(todo => {

        const toDoBody = document.createElement('div');
        toDoBody.classList.add('todo');
        toDoBody.classList.add(`priority-${todo.priority}`);
        
        const toDoCheckBox = document.createElement('div');
        toDoCheckBox.classList.add('todo__complete');
        toDoCheckBox.addEventListener('click', toggleCheckBox);

        const toDoTitle = document.createElement('div');
        toDoTitle.classList.add('todo__title');
        toDoTitle.textContent = todo.name;

        const toDoDetails = document.createElement('div');
        toDoDetails.classList.add('todo__detail');
        toDoDetails.textContent = 'details';

        const toDoDate = document.createElement('div');
        toDoDate.classList.add('todo__date');
        toDoDate.textContent = todo.date;

        const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        toDoDelete.classList.add('todo__icon')

        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/icons.svg#icon-bin')
        toDoDelete.appendChild(use);

        toDoBody.appendChild(toDoCheckBox);
        toDoBody.appendChild(toDoTitle);
        toDoBody.appendChild(toDoDetails);
        toDoBody.appendChild(toDoDate);
        toDoBody.appendChild(toDoDelete);

        element.appendChild(toDoBody);
    })
}

// grab form input and create new book object
export function addNewToDo(e, toDoList, display, overlay, form) {
    console.log('hello');
    e.preventDefault();
     
    const toDoTitle = (document.querySelector('#new-todo-title')).value;
    const toDoDate = (document.querySelector('#new-todo-date')).value;
    
    const toDoPriority = (document.querySelector('[name="priority"]:checked')).value;
    form.reset();

    const newToDo = toDoItemFactory(toDoTitle, toDoPriority, toDoDate);
    // myLibrary.push(newBook);
    // console.log(newToDo);
    // populateLibrary();

    toDoList.push(newToDo);
    renderToDos(toDoList, display);


    overlay.classList.toggle('overlay-visible');
    form.classList.toggle('create-new-open');
}

