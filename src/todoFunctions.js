import {format} from "date-fns"

// DOM manipulation object 
export const domManipulator = (function () {

    // displays all todos stored in array to the dom
    function renderToDos(toDoList, element) {

        // clear out display before redisplaying all to-dos
        element.innerHTML = "" 
        
        // create a to-do element for each todo stored in the passed array 
        // and append them to the dom element supplied to the function
        toDoList.forEach(todo => {
            
            // create main body of the to-do item
            const toDoBody = document.createElement('div');
            toDoBody.classList.add('todo');
            toDoBody.classList.add(`priority-${todo.priority}`);
            
            // create to-do item checkbox 
            const toDoCheckBox = document.createElement('div');
            toDoCheckBox.classList.add('todo__complete');
            toDoCheckBox.addEventListener('click', toggleCheckBox);
            
            // create to-do item title
            const toDoTitle = document.createElement('div');
            toDoTitle.classList.add('todo__title');
            toDoTitle.textContent = todo.name;
            
            // create to-do item details button
            const toDoDetails = document.createElement('div');
            toDoDetails.classList.add('todo__detail');
            toDoDetails.textContent = 'details';
    
            // create a to-do due date label.
            // displays a human readable representation of the date input string
            const toDoDate = document.createElement('div');
            toDoDate.classList.add('todo__date');
            // convert date string into a date the form of "Jan 12th"
            const dateObject = new Date(todo.date);
            const dateMonth = format(dateObject, 'MMM');
            const dateDay = format(dateObject, 'do');
            const dateFormated = `${dateMonth} ${dateDay}`;
            toDoDate.textContent = dateFormated;
            
            // create a delete icon for the to-do item
            const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            toDoDelete.classList.add('todo__icon');
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
    // applies modified styling to each element of a checked off to-do item 
    function toggleCheckBox(e) {

        // grabs all sibling elements of the clicked checkbox
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

    return {
        renderToDos,
        toggleCheckBox
    };


})();

// To Do data manager 
export const toDosManager = (function () {

    // To-do factory function
    function createToDo(name, priority, date) {
        return {
            name,
            priority,
            date
        }
    }

    // retrieves the data entered to the new to-do form and creates a new to-do
    // and then displays it to the dom
    function addNewToDo(e, toDoList, display, overlay, form) {

        // stop page from refreshing after each submit
        e.preventDefault();
         
        const toDoTitle = (document.querySelector('#new-todo-title')).value;
        const toDoDate = (document.querySelector('#new-todo-date')).value;
        const toDoPriority = (document.querySelector('[name="priority"]:checked')).value;
        // clear inputs after submission 
        form.reset();
    
        const newToDo = createToDo(toDoTitle, toDoPriority, toDoDate);
        toDoList.push(newToDo);
        domManipulator.renderToDos(toDoList, display);
        
        // closes the form and removes the overlay after submission
        overlay.classList.toggle('overlay-invisible');
        form.classList.toggle('create-new-open');
    }

    return {
        createToDo,
        addNewToDo
    }
})();