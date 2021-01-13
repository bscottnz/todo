import {format} from "date-fns"
import { el } from "date-fns/locale";

// DOM manipulation object 
export const domManipulator = (function () {

    // displays all todos stored in array to the dom
    function renderToDos(toDoList, element) {

        // clear out display before redisplaying all to-dos
        element.innerHTML = "" 
        
        // create a to-do element for each todo stored in the passed array 
        // and append them to the dom element supplied to the function
        toDoList.forEach((todo, i) => {
            
            // create main body of the to-do item
            const toDoBody = document.createElement('div');
            toDoBody.classList.add('todo');
            toDoBody.classList.add(`priority-${todo.priority}`);
            // give each to-do element a unique value that corresponds to
            // it's data's position in the array
            toDoBody.setAttribute('data-index', i);
            
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
            toDoDetails.addEventListener('click', (e) => {
                renderDetails(e, toDoList);
            })
    
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

            // create a edit icon for the to-do item
            const toDoEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            toDoEdit.classList.add('todo__icon-edit');
            toDoEdit.classList.add('todo__icon');
            // toDoEdit.addEventListener('click', e => toDosManager.deleteToDo(e, toDoList, element));
            const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/edit.svg#icon-edit')
            toDoEdit.appendChild(use);
            
            // create a delete icon for the to-do item
            const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            toDoDelete.classList.add('todo__icon');
            toDoDelete.classList.add('todo__icon-bin');
            toDoDelete.addEventListener('click', e => toDosManager.deleteToDo(e, toDoList, element));
            const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
            use2.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/icons.svg#icon-bin')
            toDoDelete.appendChild(use2);
            
            toDoBody.appendChild(toDoCheckBox);
            toDoBody.appendChild(toDoTitle);
            toDoBody.appendChild(toDoDetails);
            toDoBody.appendChild(toDoDate);
            toDoBody.appendChild(toDoEdit);
            toDoBody.appendChild(toDoDelete);
    
            element.appendChild(toDoBody);
        })
    }

    // retrieve the details for a selected to-do item and render them in a popup
    function renderDetails(e, todos) {

        const i = e.target.parentElement.dataset.index;
        const overlay = document.querySelector('.overlay-details');
        const display = document.querySelector('.details-popup__content');
        const popup = document.querySelector('.details-popup');

        // clear out the popup details information
        display.innerHTML = "";

        // create elements needed to build a details popup
        // main display of popup
        const body = document.createElement('div');
        body.classList.add('details-popup__content');

        // create title element
        const name = document.createElement('div');
        name.classList.add('details-popup__title');
        name.textContent = todos[i].name;

        // create project element
        // element made up of 2 spans. title and content
        const project = document.createElement('div');
        project.classList.add('details-popup__project');
        const projectTitle = document.createElement('span');
        projectTitle.textContent = 'Project:';
        projectTitle.classList.add('details-popup__catagory');
        const projectContent = document.createElement('span');
        projectContent.textContent = todos[i].project;
        project.appendChild(projectTitle);
        project.appendChild(projectContent);


        // create priority element
        const priority = document.createElement('div');
        priority.classList.add('details-popup__priority');
        const priorityTitle = document.createElement('span');
        priorityTitle.textContent = "Priority:";
        priorityTitle.classList.add('details-popup__catagory');
        const priorityContent = document.createElement('span')
        priorityContent.textContent = todos[i].priority;
        priority.appendChild(priorityTitle);
        priority.appendChild(priorityContent);

         

        // create date element
        const date = document.createElement('div');
        date.classList.add('details-popup__due');
        const dateTitle = document.createElement('span');
        dateTitle.textContent = 'Due Date:';
        dateTitle.classList.add('details-popup__catagory');
        const dateContent = document.createElement('span');
        // display human readable date
        const day = format(new Date(todos[i].date), 'do');
        const month = format(new Date(todos[i].date), 'MMMM');
        const year = format(new Date(todos[i].date), 'yyyy');
        const formatedDate = `${month} ${day}, ${year}`;
        dateContent.textContent = formatedDate;
        date.appendChild(dateTitle);
        date.appendChild(dateContent);
        

        // create details element
        const details = document.createElement('div');
        details.classList.add('details-popup__details');
        const detailsTitle = document.createElement('span');
        detailsTitle.classList.add('details-popup__details-title');
        detailsTitle.textContent = "Details:";
        const detailsContent = document.createElement('span');
        detailsContent.textContent = todos[i].details;
        details.appendChild(detailsTitle);
        details.appendChild(detailsContent);

        body.appendChild(name);
        body.appendChild(project);
        body.appendChild(priority);
        body.appendChild(date);
        body.appendChild(details);

        display.appendChild(body);

        // show popup
        popup.classList.toggle("details-popup-open");
        overlay.classList.toggle("overlay-details-invisible");


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
        // todo edit icon
        toDoItems[4].classList.toggle('todo__icon-checked');
        // todo delete icon
        toDoItems[5].classList.toggle('todo__icon-checked');
        
    }

    function removeActivePriority() {
        // removes active status from all buttons
        const btns = document.querySelectorAll('.create-new__priority-btn');
        btns.forEach(btn => {
            btn.classList.remove(`create-new__priority-btn--${btn.textContent.toLowerCase()}-active`)
        })
    }

    // toggle active visual styling to priority buttons in create new to-do menu
    function activePriority(e) {
        // removes active status from all buttons
        removeActivePriority();
        // apply active status to the selected button
        const priority = e.target.textContent.toLowerCase();
        e.target.classList.add(`create-new__priority-btn--${priority}-active`);
    }

    return {
        renderToDos,
        toggleCheckBox,
        activePriority,
        removeActivePriority,
        renderDetails
    };
})();

// To Do data manager 
export const toDosManager = (function () {

    // To-do factory function
    function createToDo(name, priority, date, details, project) {
        return {
            name,
            priority,
            date,
            details,
            project
        }
    }

    // retrieves the data entered to the new to-do form and creates a new to-do
    // and then displays it to the dom
    function addNewToDo(e, toDoList, display, overlay, form) {

        // stop page from refreshing after each submit
        e.preventDefault();
         
        const toDoTitle = (document.querySelector('#new-todo-title')).value;
        const toDoDetails = (document.querySelector('#new-todo-details')).value;
        const toDoDate = (document.querySelector('#new-todo-date')).value;
        const toDoPriority = (document.querySelector('[name="priority"]:checked')).value;
        
        const newToDo = createToDo(toDoTitle, toDoPriority, toDoDate, toDoDetails);
        toDoList.push(newToDo);
        domManipulator.renderToDos(toDoList, display);
        
        // closes the form and removes the overlay after submission
        overlay.classList.toggle('overlay-new-invisible');
        form.classList.toggle('create-new-open');

        // I want the form to fade out before the inputs are reset
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
        
        sleep(300).then(() => {
            // clear inputs after submission 
            form.reset();
            // removes active status from all buttons
            domManipulator.removeActivePriority();
        })
    }

    // removes selected to-do item from the array and re renders the display
    function deleteToDo(e, toDoList, display) {
        const element = e.target;
        let i;
        // sometimes the event target is the svg element, other times it is the use element.
        // this ensures i get index of the to-do body item 
        if (element.tagName === 'svg') {
            i = element.parentElement.dataset.index;
        } else if (element.tagName === 'use') {
            i = element.parentElement.parentElement.dataset.index;
        }
        toDoList.splice(i, 1);
        domManipulator.renderToDos(toDoList, display);
        

        // now we have the index of the dom element to be deleted,
        // the corresponding object in the data array can now be deleted.

    }

    return {
        createToDo,
        addNewToDo,
        deleteToDo
    }
})();