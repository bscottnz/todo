// all major functions are stored in these objects
import {toDosManager, domManipulator, notesManager} from "./todoFunctions.js"

// main window to render to
const display = document.querySelector('.main');
// button that opens form to create a new todo
const openForm = document.querySelector('.new-todo');
// button that closes form
const closeForm = document.querySelector('.create-new__close');
// background overlay behind create new todo form
const overlayNew = document.querySelector('.overlay-new');
// the create new todo form 
const addToDoForm = document.querySelector('.create-new');
// popup div that displays details of a todo
const detailsPopup = document.querySelector('.details-popup');
// background overlay behind details popup
const detailsOverlay = document.querySelector('.overlay-details');
// popup div that allows editing of todo item
const editPopup = document.querySelector('.edit-popup');
// background overlay behind edit popup. i should have used a single overlay but it messed with the positionings
// of all the diferent popups. next time ill make it work with one overlay. probably just need to set display none
// to the irrelevent popops
const editOverlay = document.querySelector('.overlay-edit');
// for some reason i have two variables for the same element. ill leave it for now
const editForm = document.querySelector('.edit-popup');
// each nav item that displays a different sub array of to-dos
const toDoFolders = document.querySelectorAll('.todo-folder');
// button to submit new project creation
const createProject = document.querySelector('.create-new__project-submit');
// button to submit new note creation
const createNote = document.querySelector('.create-new__note-submit');
// nav links to switch between creating a new todo, form and note from within the creation form
const newToDoLink = document.querySelector('#new-todo-link'); 
const newProjectLink = document.querySelector('#new-project-link'); 
const newNoteLink = document.querySelector('#new-note-link'); 
// menus to display when the corresponding creation nav links are clicked
const newToDoMenu = document.querySelector('#new-todo-menu');
const newProjectMenu = document.querySelector('#new-project-menu');
const newNoteMenu = document.querySelector('#new-note-menu');


// object of to-do arrays 
// grab object data from local storage if it exists, or create new example object
const todos = JSON.parse(localStorage.getItem('todos')) || {
                                                            "home": [],
                                                            "today": [],
                                                            "week": [],
                                                            "Gym":[],
                                                            "Study":[],
                                                            "Work":[]                                              
                                                            }

// if there is no local storage, populate todo list object with example items
if (!localStorage.getItem('todos')) {
    todos.home.push(toDosManager.createToDo("brush teeth", "low", "2021-12-12", " with colgate", "home", true));
    todos.home.push(toDosManager.createToDo("get dressed", "high", "2021-11-11", "singlet cos its hot", "home"));
    todos.home.push(toDosManager.createToDo("feed jimmy", "medium", "2021-06-09", "only the finest bickies", "home", true));

    todos.today.push(toDosManager.createToDo("get mail", "medium", "2021-06-09", "im expecting something", "today"));
    todos.today.push(toDosManager.createToDo("cook dinner", "medium", "2021-06-09", "juicy steak", "today", true));

    todos.week.push(toDosManager.createToDo("sport", "medium", "2021-06-09", "", "week"));

    todos.Gym.push(toDosManager.createToDo("swim", "medium", "2021-06-09", "", "Gym", true));
    todos.Gym.push(toDosManager.createToDo("walk", "high", "2021-06-09", "", "Gym"));
    todos.Gym.push(toDosManager.createToDo("weights", "low", "2021-06-09", "", "Gym"));
    
    todos.Study.push(toDosManager.createToDo("learn webkit", "high", "2021-06-09", "", "Study", true));
    todos.Study.push(toDosManager.createToDo("learn react", "medium", "2021-06-09", "", "Study"));

    todos.Work.push(toDosManager.createToDo("get that report on johnson's desk", "low", "2021-06-09", "", "Work"));
}

// array of to-do notes 
// grab array data from local storage if it exists, or create new example array
const notes = JSON.parse(localStorage.getItem('notes')) || [];

// if there is no local storage, populate notes list object with example items
if (!localStorage.getItem('notes')) {
    notes.push(notesManager.createNote("title", 'you can edit title and details in place'));
    notes.push(notesManager.createNote("books", 'go get some books'));
    notes.push(notesManager.createNote("shopping list", 'steak\ncheese\ntomatos\nsauce'));
    notes.push(notesManager.createNote("example note", 'example\nnote\nwith\nlots\nof\nlines\n'));
    notes.push(notesManager.createNote("another example note", 'example\nnote\nwith\neven\nmore\nlines\nthan\nthe\nlast\nnote'));
    notes.push(notesManager.createNote("another example note", 'example note to show off the pinterest style layout'));
    notes.push(notesManager.createNote("books", 'go get some more books'));
    notes.push(notesManager.createNote("one more example note", 'one\nmore\nexample\nnote'));
}

// initial homescreen render
domManipulator.renderAllToDos(todos, display);
domManipulator.renderProjectNames(todos, display);

// scroll to top of project names on page load
const projectsDiv = document.querySelector('.projects');
projectsDiv.scrollTop = 0;


// naviagtion side bar
// changes current folder to selected nav item
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

// toggles display on for overlay and form when the open form button is clicked
openForm.addEventListener('click', () => {
    overlayNew.classList.toggle('overlay-new-invisible');
    addToDoForm.classList.toggle('create-new-open');
})

// closes the form and toggles the display back 
closeForm.addEventListener('click', () => {
    overlayNew.classList.toggle('overlay-new-invisible');
    addToDoForm.classList.toggle('create-new-open');

    // I want the form to fade out before the inputs are reset.
    // i ended up using this sleep a lot, so next time i will put it into its own function for easier reuse. 
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    sleep(300).then(() => {
        // clear inputs after form closes 
        addToDoForm.reset();
        // removes active status from all priority buttons
        domManipulator.removeActivePriority();

        // resets form popup to shot new todo menu
        document.querySelector('#new-project-menu').style.display = "none";
        document.querySelector('#new-note-menu').style.display = "none";
        document.querySelector('#new-todo-menu').style.display = "flex";

        // resets form navigation to show active new todo link
        domManipulator.resetActiveFormLink();
    })
})

// when the submit new todo button is pressed, grab data from the form and create a new todo
addToDoForm.addEventListener('submit', e => {
    toDosManager.addNewToDo(e, todos, display, overlayNew, addToDoForm);
});

// add new poject
createProject.addEventListener('click', e => {
    toDosManager.addNewProject(e, todos, overlayNew, addToDoForm, display);
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    sleep(300).then(() => {
        // resets form active link back to new todo
        domManipulator.resetActiveFormLink();
    })
})

// add new note
createNote.addEventListener('click', e => {
    notesManager.addNewNote(e, notes, overlayNew, addToDoForm, display);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    sleep(300).then(() => {
        // resets form active link back to new todo
        domManipulator.resetActiveFormLink();
    })
    
})

// button that confirms edit on a todo
editForm.addEventListener('submit', e => {
    toDosManager.editToDo(e, todos, display, editOverlay, editForm);
})

// when a low / medium / high priority button is clicked in the create new todo form,
// then apply styling to that button to signify it has been clicked. also erases styling
// from previously clicked priority button.
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
// renders the notes and applys selected styling to the notes nav link
document.querySelector('#notes-nav').addEventListener('click', () => notesManager.arrangeNotes(notes));
document.querySelector('#notes-nav').addEventListener('click', (e) => domManipulator.updateActiveNavMain(e));

// selecting the outer li element so i can change folders by clicking this element as well as the inner li text.
let todoLinks = document.querySelectorAll('.nav__item--link');
todoLinks = Array.from(todoLinks);
// pop off the notes link since it already works without this hack
todoLinks.pop();
// naviagtion 2, for when the surrounding li item is clicked.
// i tried for a long time to make this work in a cleaner way but couldnt make it work.
//
todoLinks.forEach(folder => {
    folder.addEventListener("click", e => domManipulator.changeFolder2(e, todos, display));
})

// hamburger menu for mobile
const mobileMenu = document.querySelector('.menu-btn');
// flag that keeps track of if the menu is open or closed
let mobileMenuOpen = false;
// i couldnt add classes to the before and after divs, so did it inline instead,
// i really should have made it work with toggling classes like i usually do.
// this makes the hamburger icon spin into a cross upon clicking, then spins back when clicked again.
mobileMenu.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
        document.querySelector('.side-bar').style.left = 0;
        document.querySelector('.menu-btn__icon--before').style.transform = "rotate(135deg)";
        document.querySelector('.menu-btn__icon--before').style.top = "2px";
        document.querySelector('.menu-btn__icon--after').style.transform = "rotate(-135deg)";
        document.querySelector('.menu-btn__icon--after').style.top = "-2px";
        document.querySelector('.menu-btn__icon').style.backgroundColor = "transparent";
        
    } else {
        document.querySelector('.side-bar').style.left = "140px";
        document.querySelector('.menu-btn__icon--before').style.transform = "rotate(0)";
        document.querySelector('.menu-btn__icon--before').style.top = "-6px";
        document.querySelector('.menu-btn__icon--after').style.transform = "rotate(0)";
        document.querySelector('.menu-btn__icon--after').style.top = "6px";
        document.querySelector('.menu-btn__icon').style.backgroundColor = "#f7f7f7";
    }
})

// this sets an event listener on each of the todo / project / notes link within the create new form.
// it then sets active link styling to the selected link and removes it from the previous active link.
const createNewOptions = document.querySelectorAll('.create-new__options-items');
createNewOptions.forEach(option => {
    option.addEventListener('click', e => {
        createNewOptions.forEach(option => {
            option.classList.remove('create-new__options-items-active');
        });
        e.target.classList.add('create-new__options-items-active');
    });
})

console.log(todos)