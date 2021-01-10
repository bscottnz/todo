import {toggleCheckBox, toDoItemFactory, renderToDos} from "./todoItemFunctions.js"

// main window to render to
const renderWindow = document.querySelector('.main');
const openForm = document.querySelector('.new-todo');
const closeForm = document.querySelector('.create-new__close');
const overlay = document.querySelector('.overlay');
// todo checkbox
// const checkBoxes = document.querySelectorAll('.todo__complete');
// array of todo items
const todos = [];

todos.push(toDoItemFactory("brush teef", "low", "june 12th"));
todos.push(toDoItemFactory("sniff coke", "high", "december 11th"));
todos.push(toDoItemFactory("scratch nutz", "high", "may 1st"));
todos.push(toDoItemFactory("feed jimmy", "medium", "april 16th"));


renderToDos(todos, renderWindow);



openForm.addEventListener('click', () => {
    overlay.style.display = "flex";
})

closeForm.addEventListener('click', () => {
    overlay.style.display = "none";
})



// checkBoxes.forEach(checkBox => {
//     checkBox.addEventListener('click', toggleCheckBox);
// })

