// import {toDosManager, domManipulator} from "./todoItemFunctions.js"

import {toDosManager, domManipulator} from "./todoFunctions.js"
// import {domManipulatorCreator} from "./domManipulator.js"

// const domManipulator = domManipulatorCreator();
// const toDosManager = toDosManagerCreator();


// main window to render to
const display = document.querySelector('.main');
const openForm = document.querySelector('.new-todo');
const closeForm = document.querySelector('.create-new__close');
const overlayNew = document.querySelector('.overlay-new');
const addToDoForm = document.querySelector('.create-new');
const detailsPopup = document.querySelector('.details-popup');
const detailsOverlay = document.querySelector('.overlay-details');
const editPopup = document.querySelector('.edit-popup');
const editOverlay = document.querySelector('.overlay-edit');
const editForm = document.querySelector('.edit-popup');
// each nav item that displays a different sub array of to-dos
const toDoFolders = document.querySelectorAll('.todo-folder');
// todo checkbox
// const checkBoxes = document.querySelectorAll('.todo__complete');

// array of todo items
// const todos = [];

// object of to-do arrays 
const todos = {
    "home": [],
    "today": [],
    "week": [],
    "projects": {

    }
}

todos.home.push(toDosManager.createToDo("brush teef", "low", "2021-12-12", " with colgate", "home"));
todos.home.push(toDosManager.createToDo("sniff coke", "high", "2021-11-11", "only the good columbian stuff", "home"));
todos.home.push(toDosManager.createToDo("scratch nutz", "high", "2021-10-30", " theyre really itchy today", "home"));
todos.home.push(toDosManager.createToDo("feed jimmy", "medium", "2021-06-09", "only the finest bickies", "home"));

todos.today.push(toDosManager.createToDo("eat today", "medium", "2021-06-09", "only the finest bickies", "today"));
todos.week.push(toDosManager.createToDo("eat this week", "medium", "2021-06-09", "only the finest bickies", "week"));

// initial homescreen render
domManipulator.renderToDos(todos.home, display);





toDoFolders.forEach(folder => {
    folder.addEventListener("click", e => domManipulator.changeFolder(e, todos, display));
})



openForm.addEventListener('click', () => {
    overlayNew.classList.toggle('overlay-new-invisible');
    addToDoForm.classList.toggle('create-new-open');
})



closeForm.addEventListener('click', () => {
    overlayNew.classList.toggle('overlay-new-invisible');
    addToDoForm.classList.toggle('create-new-open');

    // I want the form to fade out before the inputs are reset
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    sleep(300).then(() => {
        // clear inputs after form closes 
        addToDoForm.reset();
        // removes active status from all priority buttons
        domManipulator.removeActivePriority();
    })
})

addToDoForm.addEventListener('submit', e => {
    toDosManager.addNewToDo(e, todos, display, overlayNew, addToDoForm);
});

editForm.addEventListener('submit', e => {
    toDosManager.editToDo(e, todos, display, editOverlay, editForm);
})

// will need to put this listener in the element creation script later
const priorityBtns = document.querySelectorAll('.create-new__priority-btn');
    priorityBtns.forEach(btn => {
    btn.addEventListener('click', e =>{
        domManipulator.activePriority(e);
    });
})

// close details popup
const closeDetails = document.querySelector('.details-popup__close');
closeDetails.addEventListener('click', () => {
    detailsPopup.classList.toggle("details-popup-open");
    detailsOverlay.classList.toggle("overlay-details-invisible");
})

// close edit popup
const closeEdit = document.querySelector('.edit-popup__close');
closeEdit.addEventListener('click', () => {
    editPopup.classList.toggle("edit-popup-open");
    editOverlay.classList.toggle("overlay-edit-invisible");
})





