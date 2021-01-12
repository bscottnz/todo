// import {toDosManager, domManipulator} from "./todoItemFunctions.js"

import {toDosManager, domManipulator} from "./todoFunctions.js"
// import {domManipulatorCreator} from "./domManipulator.js"

// const domManipulator = domManipulatorCreator();
// const toDosManager = toDosManagerCreator();


// main window to render to
const display = document.querySelector('.main');
const openForm = document.querySelector('.new-todo');
const closeForm = document.querySelector('.create-new__close');
const overlay = document.querySelector('.overlay');
const addToDoForm = document.querySelector('.create-new');
// todo checkbox
// const checkBoxes = document.querySelectorAll('.todo__complete');
// array of todo items
const todos = [];

todos.push(toDosManager.createToDo("brush teef", "low", "2021-12-12"));
todos.push(toDosManager.createToDo("sniff coke", "high", "2021-11-11"));
todos.push(toDosManager.createToDo("scratch nutz", "high", "2021-10-30"));
todos.push(toDosManager.createToDo("feed jimmy", "medium", "2021-06-09"));


domManipulator.renderToDos(todos, display);



openForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
})



closeForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
    
})

addToDoForm.addEventListener('submit', e => toDosManager.addNewToDo(e, todos, display, overlay, addToDoForm));

//2021-01-12 mm-dd-yyyy





