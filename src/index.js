// import {toDosManager, domManipulator} from "./todoItemFunctions.js"

import {toDosManager, domManipulator, notesManager} from "./todoFunctions.js"
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
const createProject = document.querySelector('.create-new__project-submit');
const createNote = document.querySelector('.create-new__note-submit');
const projectDisplay = document.querySelector('.projects');


const newToDoLink = document.querySelector('#new-todo-link'); 
const newProjectLink = document.querySelector('#new-project-link'); 
const newNoteLink = document.querySelector('#new-note-link'); 

const newToDoMenu = document.querySelector('#new-todo-menu');
const newProjectMenu = document.querySelector('#new-project-menu');
const newNoteMenu = document.querySelector('#new-note-menu');

// array of todo items
// const todos = [];

// object of to-do arrays 
// grab object data from local storage if it exists, or create new example object
const todos = JSON.parse(localStorage.getItem('todos')) || {
                                                            "home": [],
                                                            "today": [],
                                                            "week": [],
                                                            "gym":[],
                                                            "gym2":[],
                                                            "gym3":[],
                                                            "gym4":[],
                                                            "gym5":[],
                                                            "gym6":[]   
                                                            }
// array of to-do notes 
// grab array data from local storage if it exists, or create new example array
const notes = JSON.parse(localStorage.getItem('notes')) || [];

// if there is no local storage, populate notes list object with example items
if (!localStorage.getItem('notes')) {
    notes.push(notesManager.createNote("books", 'go get some books'));
    notes.push(notesManager.createNote("books2", 'go get some more books'));
    notes.push(notesManager.createNote("books3", 'go get some more bookssssssssss sssssssssss'));
    notesManager.arrangeNotes(notes);
    notes.push(notesManager.createNote("books4", 'go get some more bookssssssssss sssssssssss dfsd dfsd dfsdfsdfdsfds dfsdf dfsdfsdfs'));
    notesManager.arrangeNotes(notes);
    notes.push(notesManager.createNote("books5", 'go get some more bookssssssssss sssssssssss fdsf'));
    notesManager.arrangeNotes(notes);
    notes.push(notesManager.createNote("books6", 'go get some more bookssssssssss sssssssssss fsdfs fds dfs dfdfsdfsd'));
    notesManager.arrangeNotes(notes);
}



// if there is no local storage, populate todo list object with example items
if (!localStorage.getItem('todos')) {
    todos.home.push(toDosManager.createToDo("brush teef", "low", "2021-12-12", " with colgate", "home"));
    todos.home.push(toDosManager.createToDo("get dressed", "high", "2021-11-11", "singlet cos its hot", "home"));
    todos.home.push(toDosManager.createToDo("scratch foot", "high", "2021-10-30", " theyre really itchy today", "home"));
    todos.home.push(toDosManager.createToDo("feed jimmy", "medium", "2021-06-09", "only the finest bickies", "home"));


    todos.today.push(toDosManager.createToDo("get mail", "medium", "2021-06-09", "only the finest bickies", "today"));
    todos.today.push(toDosManager.createToDo("cook dinner", "medium", "2021-06-09", "only the finest bickies", "today"));
    todos.week.push(toDosManager.createToDo("sunday sport", "medium", "2021-06-09", "only the finest bickies", "week"));
    todos.week.push(toDosManager.createToDo("drop letter at freds", "medium", "2021-06-09", "only the finest bickies", "week"));

    todos.gym.push(toDosManager.createToDo("gym 1", "medium", "2021-06-09", "only the finest bickies", "gym"));
    todos.gym.push(toDosManager.createToDo("gym 2", "medium", "2021-06-09", "only the finest bickies", "gym"));
    todos.gym.push(toDosManager.createToDo("gym 3", "medium", "2021-06-09", "only the finest bickies", "gym"));
}


// initial grid render
// notesManager.arrangeNotes(notes);
// initial homescreen render
domManipulator.renderAllToDos(todos, display);
domManipulator.renderProjectNames(todos, display);


// scroll to top of project names on page load
const projectsDiv = document.querySelector('.projects');
projectsDiv.scrollTop = 0;




// naviagtion
toDoFolders.forEach(folder => {
    folder.addEventListener("click", e => domManipulator.changeFolder(e, todos, display));
})



// control which form menu is open 

newToDoLink.addEventListener('click', () =>{
    // turn off other menus
    newProjectMenu.style.display = "none";
    newNoteMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newToDoMenu.style.display = "flex";
})

newProjectLink.addEventListener('click', () =>{
    // turn off other menus
    newToDoMenu.style.display = "none";
    newNoteMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newProjectMenu.style.display = "flex";
})

newNoteLink.addEventListener('click', () =>{
    // turn off other menus
    newToDoMenu.style.display = "none";
    newProjectMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newNoteMenu.style.display = "flex";
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

// add new poject
createProject.addEventListener('click', e => {
    toDosManager.addNewProject(e, todos, overlayNew, addToDoForm, display);
})

// add new note
createNote.addEventListener('click', e => {
    notesManager.addNewNote(e, notes, overlayNew, addToDoForm, display);
})

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

// navigate to notes menu
document.querySelector('#notes-nav').addEventListener('click', () => notesManager.arrangeNotes(notes));
document.querySelector('#notes-nav').addEventListener('click', (e) => domManipulator.updateActiveNavMain(e));

let todoLinks = document.querySelectorAll('.nav__item--link');
todoLinks = Array.from(todoLinks);
todoLinks.pop();
// console.log(todoLinks);
// naviagtion 2, for when the surrounding li item is clicked.
todoLinks.forEach(folder => {
    folder.addEventListener("click", e => domManipulator.changeFolder2(e, todos, display));
})






