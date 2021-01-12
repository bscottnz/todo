import domManipulatorCreator from "./domManipulator.js"
domManipulator = domManipulatorCreator();

export const toDosManagerCreator = function () {

    function createToDo(name, priority, date) {
        return {
            name,
            priority,
            date
        }
    }

    function addNewToDo(e, toDoList, display, overlay, form) {
    
        e.preventDefault();
         
        const toDoTitle = (document.querySelector('#new-todo-title')).value;
        const toDoDate = (document.querySelector('#new-todo-date')).value;
        
        
        const toDoPriority = (document.querySelector('[name="priority"]:checked')).value;
        form.reset();
    
        const newToDo = createToDo(toDoTitle, toDoPriority, toDoDate);
        // myLibrary.push(newBook);
        // console.log(newToDo);
        // populateLibrary();
    
        toDoList.push(newToDo);
        domManipulator.renderToDos(toDoList, display);
    
    
        overlay.classList.toggle('overlay-invisible');
        form.classList.toggle('create-new-open');
    }

    return {
        createToDo,
        addNewToDo
    }


};