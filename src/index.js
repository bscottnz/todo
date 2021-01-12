import {toggleCheckBox, toDoItemFactory, renderToDos, addNewToDo} from "./todoItemFunctions.js"

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

todos.push(toDoItemFactory("brush teef", "low", "june 12th"));
todos.push(toDoItemFactory("sniff coke", "high", "december 11th"));
todos.push(toDoItemFactory("scratch nutz", "high", "may 1st"));
todos.push(toDoItemFactory("feed jimmy", "medium", "april 16th"));


renderToDos(todos, display);



openForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
})



closeForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
    
})

addToDoForm.addEventListener('submit', e => addNewToDo(e, todos, display, overlay, addToDoForm));



