import {format} from "date-fns"
import { el } from "date-fns/locale";
import Colcade from 'colcade'


// DOM manipulation object 
export const domManipulator = (function () {

    // displays all todos stored in array to the dom
    function renderToDos(todos, element) {

        

        // grab relevent todo items
        const toDoList = todos[toDosManager.getCurrentProject()];
        // console.log(toDoList);
        

        // clear out display before redisplaying all to-dos
        element.innerHTML = "" 
        
        // dont render an empty list
        if (toDoList.length == 0) {
            return
        }

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
            // set data atrribute to the to-do items project name
            toDoBody.setAttribute('data-project', `${todo.project}`)
            
            // create to-do item checkbox 
            const toDoCheckBox = document.createElement('div');
            toDoCheckBox.classList.add('todo__complete');
            toDoCheckBox.addEventListener('click', e => toggleCheckBox(e, todos, element));
            
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
            toDoEdit.addEventListener('click', e => renderEdit(e, toDoList, element));
            const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/edit.svg#icon-edit')
            toDoEdit.appendChild(use);
            
            // create a delete icon for the to-do item
            const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            toDoDelete.classList.add('todo__icon');
            toDoDelete.classList.add('todo__icon-bin');
            toDoDelete.addEventListener('click', e => toDosManager.deleteToDo(e, todos, element));
            const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
            use2.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons.svg#icon-bin')
            toDoDelete.appendChild(use2);
            
            toDoBody.appendChild(toDoCheckBox);
            toDoBody.appendChild(toDoTitle);
            toDoBody.appendChild(toDoDetails);
            toDoBody.appendChild(toDoDate);
            toDoBody.appendChild(toDoEdit);
            toDoBody.appendChild(toDoDelete);

            //apply checked status 
            if (todo.checked) {
                applyCheckedOnReload(toDoBody)
            }
    
            element.appendChild(toDoBody);
        })

        // save todos to local storage
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // render all to-dos from all projects 
    function renderAllToDos(toDoObject, element) {

        

        // clear out display before redisplaying all to-dos
        element.innerHTML = "" 

        for (const project in toDoObject) {

            // create a to-do element for each todo stored in the passed array 
            // and append them to the dom element supplied to the function
            toDoObject[project].forEach((todo, i) => {
                
                // create main body of the to-do item
                const toDoBody = document.createElement('div');
                toDoBody.classList.add('todo');
                toDoBody.classList.add(`priority-${todo.priority}`);
                // give each to-do element a unique value that corresponds to
                // it's data's position in the array
                toDoBody.setAttribute('data-index', i);
                // set data atrribute to the to-do items project name
                toDoBody.setAttribute('data-project', `${todo.project}`)
                
                // create to-do item checkbox 
                const toDoCheckBox = document.createElement('div');
                toDoCheckBox.classList.add('todo__complete');
                toDoCheckBox.addEventListener('click', e => toggleCheckBox(e, toDoObject, element));
                
                // create to-do item title
                const toDoTitle = document.createElement('div');
                toDoTitle.classList.add('todo__title');
                toDoTitle.textContent = todo.name;
                
                // create to-do item details button
                const toDoDetails = document.createElement('div');
                toDoDetails.classList.add('todo__detail');
                toDoDetails.textContent = 'details';
                toDoDetails.addEventListener('click', (e) => {
                    renderDetails(e, toDoObject[project]);
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
                toDoEdit.addEventListener('click', e => renderEdit(e, toDoObject[project], element));
                const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
                use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/edit.svg#icon-edit')
                toDoEdit.appendChild(use);
                
                // create a delete icon for the to-do item
                const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                toDoDelete.classList.add('todo__icon');
                toDoDelete.classList.add('todo__icon-bin');
                toDoDelete.addEventListener('click', e => toDosManager.deleteToDo(e, toDoObject, element));
                const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
                use2.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons.svg#icon-bin')
                toDoDelete.appendChild(use2);
                
                toDoBody.appendChild(toDoCheckBox);
                toDoBody.appendChild(toDoTitle);
                toDoBody.appendChild(toDoDetails);
                toDoBody.appendChild(toDoDate);
                toDoBody.appendChild(toDoEdit);
                toDoBody.appendChild(toDoDelete);

                //apply checked status 
                if (todo.checked) {
                    applyCheckedOnReload(toDoBody)
                }
        
                element.appendChild(toDoBody);
            })
        }

        // save todos to local storage
        localStorage.setItem("todos", JSON.stringify(toDoObject));
        
        
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
        const priorityContent = document.createElement('span');
        priorityContent.textContent = todos[i].priority[0].toUpperCase() + todos[i].priority.slice(1);
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

    function renderEdit(e, todos) {

        const element = e.target;
        // sometimes the event target is the svg element, other times it is the use element.
        // this ensures i get index of the to-do body item 
        let i;
        let project;

        if (element.tagName === 'svg') {
            i = element.parentElement.dataset.index;
        } else if (element.tagName === 'use') {
            i = element.parentElement.parentElement.dataset.index;
        }

        if (element.tagName === 'svg') {
            project = element.parentElement.dataset.project;
        } else if (element.tagName === 'use') {
            project = element.parentElement.parentElement.dataset.project;
        }

        const overlay = document.querySelector('.overlay-edit');
        const display = document.querySelector('.edit-popup__entry');
        const popup = document.querySelector('.edit-popup');

        // clear out the popup edit information
        display.innerHTML = "";

        // retreive name of todo and display it in a text area
        const title = document.createElement('textarea');
        title.classList.add('edit-popup__input');
        title.setAttribute('maxlength', '40');
        title.required = true;
        title.textContent = todos[i].name;
        // attatch index to title element so i can grab it when confirming edit
        // and change the array data for that to-do item
        title.dataset.index = i;
        // attach project name to title element so i can grab it when confirming edits
        title.dataset.project = project;

        // retreive details of todo and display it in a text area
        const details = document.createElement('textarea');
        details.classList.add('edit-popup__input', 'edit-popup__input-big');
        details.setAttribute("placeholder", "Details:")
        details.textContent = todos[i].details;

        // create the elements that make up the date section
        const dateContainer = document.createElement('div');
        dateContainer.classList.add('edit-popup__date');

        const dateContainerTitle = document.createElement('div');
        dateContainerTitle.classList.add('edit-popup__date-title');
        dateContainerTitle.textContent = 'Due Date:';

        const dateContainerInput = document.createElement('input');
        dateContainerInput.classList.add('edit-popup__date-input');
        dateContainerInput.setAttribute('type', 'date');
        dateContainerInput.required = true;
        dateContainerInput.setAttribute('value', todos[i].date);

        dateContainer.appendChild(dateContainerTitle);
        dateContainer.appendChild(dateContainerInput);

        // create the priority buttons section
        const footer = document.createElement('div');
        footer.classList.add('edit-popup__wrapper-priority-submit');

        const priorityContainer = document.createElement('div');
        priorityContainer.classList.add('edit-popup__priority');

        const priorityTitle = document.createElement('div');
        priorityTitle.classList.add('edit-popup__priority-title');
        priorityTitle.textContent = 'Priority:';
        // low priority input
        const priorityLowInput = document.createElement('input');
        priorityLowInput.setAttribute('type', 'radio');
        priorityLowInput.setAttribute('id', 'low');
        priorityLowInput.setAttribute('name', 'edit-priority');
        priorityLowInput.setAttribute('value', 'low');
        if (todos[i].priority === 'low') {
            priorityLowInput.checked = true;
        }
        priorityLowInput.required = true;
        // low priority label
        const priorityLowLabel = document.createElement('label');
        priorityLowLabel.setAttribute("for", "low");
        priorityLowLabel.classList.add('edit-popup__priority-btn', 'edit-popup__priority-btn--low');
        if (todos[i].priority === 'low') {
            priorityLowLabel.classList.add('edit-popup__priority-btn--low-active');
        }
        priorityLowLabel.textContent = "Low";
        // medium priority input
        const priorityMediumInput = document.createElement('input');
        priorityMediumInput.setAttribute('type', 'radio');
        priorityMediumInput.setAttribute('id', 'medium');
        priorityMediumInput.setAttribute('name', 'edit-priority');
        priorityMediumInput.setAttribute('value', 'medium');
        if (todos[i].priority === 'medium') {
            priorityMediumInput.checked = true;
        }
        priorityMediumInput.required = true;
        // Medium priority label
        const priorityMediumLabel = document.createElement('label');
        priorityMediumLabel.setAttribute("for", "medium");
        priorityMediumLabel.classList.add('edit-popup__priority-btn', 'edit-popup__priority-btn--medium');
        if (todos[i].priority === 'medium') {
            priorityMediumLabel.classList.add('edit-popup__priority-btn--medium-active');
        }
        priorityMediumLabel.textContent = "Medium";
        // high priority input
        const priorityHighInput = document.createElement('input');
        priorityHighInput.setAttribute('type', 'radio');
        priorityHighInput.setAttribute('id', 'high');
        priorityHighInput.setAttribute('name', 'edit-priority');
        priorityHighInput.setAttribute('value', 'high');
        if (todos[i].priority === 'high') {
            priorityHighInput.checked = true;
        }
        priorityHighInput.required = true;
        // high priority label
        const priorityHighLabel = document.createElement('label');
        priorityHighLabel.setAttribute("for", "high");
        priorityHighLabel.classList.add('edit-popup__priority-btn', 'edit-popup__priority-btn--high');
        if (todos[i].priority === 'high') {
            priorityHighLabel.classList.add('edit-popup__priority-btn--high-active');
        }
        priorityHighLabel.textContent = "High";

        

        priorityContainer.appendChild(priorityTitle);
        priorityContainer.appendChild(priorityLowInput);
        priorityContainer.appendChild(priorityLowLabel);
        priorityContainer.appendChild(priorityMediumInput);
        priorityContainer.appendChild(priorityMediumLabel);
        priorityContainer.appendChild(priorityHighInput);
        priorityContainer.appendChild(priorityHighLabel);

        // submit button (is in same footer as the piority buttons container)
        const submit = document.createElement("input");
        submit.setAttribute('type', "submit");
        submit.setAttribute('id', 'todo-edit-submit')
        submit.setAttribute('value', 'Confirm Edit')
        submit.classList.add("edit-popup__todo-submit");

        footer.appendChild(priorityContainer);
        footer.appendChild(submit);

        // append created elements to the DOM
        display.appendChild(title);
        display.appendChild(details);
        display.appendChild(dateContainer);
        display.appendChild(footer);

        //listener that changes the highlighted priority button
        const priorityBtns = document.querySelectorAll('.edit-popup__priority-btn');
        priorityBtns.forEach(btn => {
            btn.addEventListener('click', e =>{
                editPriority(e);
            });
        })


        // show popup
        popup.classList.toggle("edit-popup-open");
        overlay.classList.toggle("overlay-edit-invisible");

    }

    // applies modified styling to each element of a checked off to-do item 
    function toggleCheckBox(e, toDoObject, display) {

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

        // toggle checked status on todo item data
        const project = toDo.dataset.project;
        const index = toDo.dataset.index;

        toDoObject[project][index].checked = !toDoObject[project][index].checked;
        console.log(toDoObject[project]);
    
        // save todos to local storage
        localStorage.setItem("todos", JSON.stringify(toDoObject));

        // update project count
        renderProjectNames(toDoObject, display)
        
    }

    // applies checked status to checked items on reload
    function applyCheckedOnReload(toDoItem) {

        const toDoItems = toDoItem.children;
        
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

    // change priority button sytling in edit menu
    // i could make this into a function that accepts a class name, and use that 
    // function for this and the previous function.
    function editPriority(e) {
        // removes active status from all buttons
        const btns = document.querySelectorAll('.edit-popup__priority-btn');
        btns.forEach(btn => {
            btn.classList.remove(`edit-popup__priority-btn--${btn.textContent.toLowerCase()}-active`)
        })
        // apply active status to the selected button
        const priority = e.target.textContent.toLowerCase();
        e.target.classList.add(`edit-popup__priority-btn--${priority}-active`);
    }

    // function to handle clicks on the navigation
    function changeFolder(e, todos, display) {
        
        // sets the current folder variable to nav item that was clicked
        // because i set everything to be lowercase in my code, it woudl crash when i used uppercase
        // letters in my custom projects. this allows uppercase project names
        
        if (['Home', 'Week', 'Today'].includes(e.target.textContent)) {
            toDosManager.changeCurrentProject(e.target.textContent.toLowerCase());
        } else {
            toDosManager.changeCurrentProject(e.target.textContent);
        }

        console.log("you are in folder", toDosManager.getCurrentProject());

    



        
        // render all to-dos from all projects if on the home page. otherwise
        // only render the relevent to-do items
        if (toDosManager.getCurrentProject() === 'home') {
            renderAllToDos(todos, display);
            updateActiveNavMain(e);
        } else {
            
            renderToDos(todos, display);
            updateActiveNavMain(e);
        }

        // if changing to a new empty custom project, display placeholder screen
        if (!['home', 'week', 'today'].includes(toDosManager.getCurrentProject())) {
            if (todos[toDosManager.getCurrentProject()].length < 1) {
                renderEmptyProjectPlaceholder(todos, display);
            }
        }
        
        
        
    }

    // function to handle clicks on the wider navigation area. 
    // I could'nt get it to work otherwise.
    function changeFolder2(e, todos, display) {
        // console.log('second');
        // console.log(e.target.childNodes[0].textContent.toLowerCase());
        
        if (e.target.tagName == 'li' || e.target.tagName == 'LI') {
            // sets the current folder variable to nav item that was clicked
            // toDosManager.changeCurrentProject(e.target.childNodes[0].textContent.toLowerCase());
            // console.log("you are in folder", toDosManager.getCurrentProject());
            // console.log(e.target.childNodes[0].textContent.toLowerCase());

            // sets the current folder variable to nav item that was clicked
        
            if (['Home', 'Week', 'Today'].includes(e.target.childNodes[0].textContent)) {
                toDosManager.changeCurrentProject(e.target.childNodes[0].textContent.toLowerCase());
            } else {
                toDosManager.changeCurrentProject(e.target.childNodes[0].textContent);
            }

            console.log("you are in folder", toDosManager.getCurrentProject());



            
            // render all to-dos from all projects if on the home page. otherwise
            // only render the relevent to-do items
            if (toDosManager.getCurrentProject() === 'home') {
                renderAllToDos(todos, display);
                updateActiveNavMain(e);
            } else {
                
                renderToDos(todos, display);
                updateActiveNavMain(e);
            }

            // if changing to a new empty custom project, display placeholder screen
            if (!['home', 'week', 'today'].includes(toDosManager.getCurrentProject())) {
                if (todos[toDosManager.getCurrentProject()].length < 1) {
                    renderEmptyProjectPlaceholder(todos, display);
                }
            }
        }
        
        
        
    }

    // render the project names to the side bar
    function renderProjectNames(todos, display) {
        const projectContainer = document.querySelector('.projects');
        // clear list before appending all items
        projectContainer.innerHTML = ""
        
        // get an object of only the custom projects
        const projectsObject = Object.assign({}, todos);
        delete projectsObject.home;
        delete projectsObject.today;
        delete projectsObject.week;

        // console.log("custom projects", projectsObject);

        // display project names and counts to the sidebar
        for (const project in projectsObject) {

            // container around project name and count
            const projectNameCount = document.createElement('li');
            projectNameCount.classList.add('projects__item');
            // projectNameCount.classList.add('projects__item--custom');
            projectNameCount.classList.add('nav__item--link');
            projectNameCount.classList.add('custom-project-count-container');
            projectNameCount.addEventListener("click", e => domManipulator.changeFolder2(e, todos, display));
            projectNameCount.addEventListener("click", e => updateActiveNavMain(e));


            // project name
            const projectName = document.createElement('span');
            projectName.classList.add('todo-folder');
            projectName.classList.add('project-name');
            projectName.textContent = project;
            // event listner to change working folder / page display
            projectName.addEventListener("click", e => domManipulator.changeFolder(e, todos, display));

            // project count
            const projectCount = document.createElement('div');
            projectCount.classList.add('project-count');

            // count how many non checked items there are in the project
            // and assign this value to the count value
            let n = 0;
            projectsObject[project].forEach(todo => {
                if(!todo.checked) {
                    n++
                }
            })

            
            projectCount.textContent = n;

            projectNameCount.appendChild(projectName);
            // only show count if greater than 0
            if (n > 0) {
                projectNameCount.appendChild(projectCount);
            }
            
            projectContainer.appendChild(projectNameCount);

            
            // this re-applys nav link selected status to selected custom project,
            // since the entire custom project names div is re-rendered each time. 
            if(toDosManager.getCurrentProject() == project) {
                projectNameCount.classList.add('nav__selected')
            }
        }


        // update home / today / week folders. only count non checked items
        const homeCount = document.querySelector('.home-count');
        // sums number of non checked item in project array and displays count text as this sum
        // this will only count the items that are specifically saved to home folder,
        // i want to count all todos.

        // homeCount.textContent = todos.home.reduce((total, value) => {
        //     return total + !value.checked;
        // }, 0);

        let homeCountNumber = 0;
        for (const todoList in todos) {
            todos[todoList].forEach(todo => {
                if (!todo.checked) {
                    homeCountNumber++;
                }
            })
        }
        homeCount.textContent = homeCountNumber;
        // re-set count display
        homeCount.style.display = 'inline-flex';
        if (homeCount.textContent < 1) {
            // hide count display if 0
            homeCount.style.display = 'none';
        }

        const weekCount = document.querySelector('.week-count');
        // sums number of non checked item in project array and displays count text as this sum
        weekCount.textContent = todos.week.reduce((total, value) => {
            return total + !value.checked;
        }, 0);
        // re-set count display
        weekCount.style.display = 'inline-flex';
        if (weekCount.textContent < 1) {
            // hide count display if 0
            weekCount.style.display = 'none';
        }
        
        const todayCount = document.querySelector('.today-count');
        // sums number of non checked item in project array and displays count text as this sum
        todayCount.textContent = todos.today.reduce((total, value) => {
            return total + !value.checked;
        }, 0);
        // re-set count display
        todayCount.style.display = 'inline-flex';
        if (todayCount.textContent < 1) {
            // hide count display if 0
            todayCount.style.display = 'none';
        }
        
    }

    // display the amount of todo items next to the project title
    function renderProjectCount(todos, display) {
 
    }

    // scroll poject names to top
    function projectNamesScrollTop() {
        const projectsDiv = document.querySelector('.projects');
        projectsDiv.scrollTop = 0;
    }

    // scroll project names to bottom
    function projectNamesScrollBottom() {
        const projectsDiv = document.querySelector('.projects');
        projectsDiv.scrollTop = projectsDiv.scrollHeight;
    }

    function renderEmptyProjectPlaceholder(todos, display) {
        document.querySelector('.main').innerHTML = 
        `<div class="add-or-remove">
            <div class="add-or-remove__heading">Empty Project!</div>
            <div class="add-or-remove__content">
                <div class="add-or-remove__content-text">
                    Create a new to-do item or delete project.
                </div>
                <div class="add-or-remove__content-btn">
                    Delete Project
                </div>
            </div>
        </div>`

        
        // remove project button
        document.querySelector('.add-or-remove__content-btn').addEventListener("click", () => {
            
            // delete project from todos data
            delete todos[toDosManager.getCurrentProject()];
            
            document.querySelector('.main').innerHTML = "";
            // save todos to local storage
            localStorage.setItem("todos", JSON.stringify(todos));
            renderProjectNames(todos, display);
            // change folder to home
            toDosManager.changeCurrentProject('home');
            renderAllToDos(todos, display);
            // update nave link to show home active
            document.querySelector('.nav').children.item(0).classList.add('nav__selected');
            console.log(document.querySelector('.nav').children.item(0));

            

        })
    }

    // turn off selected styling for all nav items and apply to the selected item
    function updateActiveNavMain(e) {
        const navItems = document.querySelectorAll('.nav__item--link');
        navItems.forEach(item => {
            item.classList.remove("nav__selected");
        })
       
        if (e.target.textContent === 'Notes') {
            e.target.classList.add('nav__selected');
        } else {
            if (e.target.tagName == "span" || e.target.tagName == "SPAN") {
                e.target.parentElement.classList.add('nav__selected');
            } else if (e.target.tagName == "li" || e.target.tagName == "LI") {
                e.target.classList.add('nav__selected');
                // console.log(e.target);
            }
        }
        
        
    }

    // after form closes, reset the active link to the new todo menu
    function resetActiveFormLink() {
        const createNewOptions = document.querySelectorAll('.create-new__options-items');
        createNewOptions.forEach(option => {
            option.classList.remove('create-new__options-items-active');
        });
        createNewOptions[0].classList.add('create-new__options-items-active');
    }

    

    return {
        renderToDos,
        renderAllToDos,
        toggleCheckBox,
        applyCheckedOnReload,
        activePriority,
        removeActivePriority,
        editPriority,
        renderDetails,
        renderEdit,
        changeFolder,
        changeFolder2,
        renderProjectNames,
        renderProjectCount,
        projectNamesScrollTop,
        projectNamesScrollBottom,
        renderEmptyProjectPlaceholder,
        updateActiveNavMain,
        resetActiveFormLink
    };
})();

// To Do data manager 
export const toDosManager = (function () {

    // keep track of what page the user is on, so that added items go
    // to the correct project. defaults to home page on load

    let currentProject = "home";

    // change currentProject
    function changeCurrentProject(newProject) {
        currentProject = newProject;
    }

    // get currentProject
    function getCurrentProject() {
        return currentProject;
    }

   


    // To-do factory function
    function createToDo(name, priority, date, details, project, checked=false) {
        return {
            name,
            priority,
            date,
            details,
            project,
            checked
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
        const toDoPriority = (document.querySelector('[name="create-new-priority"]:checked')).value;
        // get the current project so can store new to-do item in the correct sub array.
        const toDoProject = getCurrentProject();
        
        const newToDo = createToDo(toDoTitle, toDoPriority, toDoDate, toDoDetails, toDoProject);
        toDoList[toDoProject].push(newToDo);


        // render all to-dos from all projects if on the home page. otherwise
        // only render the relevent to-do items
        if (getCurrentProject() === 'home') {
            domManipulator.renderAllToDos(toDoList, display);
            
        } else {
            domManipulator.renderToDos(toDoList, display);
        }
        
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

        // update project name counter 
        domManipulator.renderProjectNames(toDoList, display);
    }

    // edit selected todo data
    function editToDo(e, toDoList, display, overlay, form) {

        e.preventDefault();
        // retrieve the position of the to-do item in the data array
        const i = e.target.firstElementChild.dataset.index;
        // retrieve the project the to-do was assigned to
        
        const project = e.target.firstElementChild.dataset.project;

        // update the to-do item data
        toDoList[project][i].name = (document.querySelector('.edit-popup__input')).value;
        toDoList[project][i].details = (document.querySelector('.edit-popup__input-big')).value;
        toDoList[project][i].date = (document.querySelector('.edit-popup__date-input')).value;
        toDoList[project][i].priority = (document.querySelector('[name="edit-priority"]:checked')).value;

        // render all to-dos from all projects if on the home page. otherwise
        // only render the relevent to-do items
        if (getCurrentProject() === 'home') {
            domManipulator.renderAllToDos(toDoList, display);
            console.log(toDoList);
        } else {
            domManipulator.renderToDos(toDoList, display);
        }

        overlay.classList.toggle('overlay-edit-invisible');
        form.classList.toggle('edit-popup-open');

        // console.log(document.querySelector('.edit-popup__input').value);
        
    }

    // removes selected to-do item from the array and re renders the display
    function deleteToDo(e, toDoList, display) {
        const element = e.target;
        let i;
        let project;
        // sometimes the event target is the svg element, other times it is the use element.
        // this ensures i get index of the to-do body item 
        if (element.tagName === 'svg') {
            i = element.parentElement.dataset.index;
        } else if (element.tagName === 'use') {
            i = element.parentElement.parentElement.dataset.index;
        }

        // sometimes the event target is the svg element, other times it is the use element.
        // this ensures i get project of the to-do body item 
        if (element.tagName === 'svg') {
            project = element.parentElement.dataset.project;
        } else if (element.tagName === 'use') {
            project = element.parentElement.parentElement.dataset.project;
        }

        
        
        // render all to-dos from all projects if on the home page. otherwise
        // only render the relevent to-do items
        if (getCurrentProject() === 'home') {
            // if in home
            toDoList[project].splice(i, 1);
            domManipulator.renderAllToDos(toDoList, display);
            // logs the entire to-do object
            // console.log(toDoList);
        } else {
            // console.log(toDoList[toDosManager.getCurrentProject()]);
            // logs just the project array
            
            toDoList[toDosManager.getCurrentProject()].splice(i, 1);
            
            domManipulator.renderToDos(toDoList, display);
        }

        // console.log('del', toDoList)
        //check if a project is now empty, and delete the project if true
        checkEmptyProject(toDoList, display);
        // save todos to local storage
        localStorage.setItem("todos", JSON.stringify(toDoList));
        // update project name counter 
        domManipulator.renderProjectNames(toDoList, display);

    }

    // add new project to-dos object
    function addNewProject(e, todos, overlay, form, display) {
        const newProject = (document.querySelector('.create-new__project-input')).value;
        // if text was entered in the input and project doesnt already exist
        if (newProject && !(newProject.toLowerCase() in todos)) {
            todos[newProject] = [];

            // render project names in sidebar
            domManipulator.renderProjectNames(todos, display);
            
            // sets the current folder variable to nav item that was clicked
            toDosManager.changeCurrentProject(newProject);
            console.log("you are in folder", toDosManager.getCurrentProject());

            // render all to-dos from all projects if on the home page. otherwise
            // only render the relevent to-do items
            if (toDosManager.getCurrentProject() === 'home') {
                domManipulator.renderAllToDos(todos, display);
            } else {
                domManipulator.renderToDos(todos, display);
            }

            // sets nav active status to newly created project
            const navItems = document.querySelectorAll('.nav__item--link');
            navItems.forEach(item => {
                item.classList.remove("nav__selected");
            })
            document.querySelector('.projects').lastChild.classList.add('nav__selected');

            // scrolls to bottom of custom projects div
            domManipulator.projectNamesScrollBottom();

          // if the created project already exists, change folder to that project  
        } else if (newProject && (newProject.toLowerCase() in todos)) {

            // render all to-dos from all projects if on the home page. otherwise
            // only render the relevent to-do items
            if (newProject.toLowerCase() === 'home') {
                console.log(`${newProject} already exists. changing folder to ${newProject}`);
                changeCurrentProject(newProject.toLowerCase());
                domManipulator.renderAllToDos(todos, display);
            } else {
                console.log(`${newProject} already exists. changing folder to ${newProject}`);
                changeCurrentProject(newProject.toLowerCase());
                domManipulator.renderToDos(todos, display);
            }
            
        }

        // closes the form and removes the overlay after submission
        overlay.classList.toggle('overlay-new-invisible');
        form.classList.toggle('create-new-open');


        // I want the form to fade out before the input is reset
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }
        
        sleep(300).then(() => {
            // clear input after form closes 
            form.reset();
            // reset add new form to show add todo
            document.querySelector('#new-project-menu').style.display = "none";
        
            document.querySelector('#new-todo-menu').style.display = "flex";
        })

        // show a placeholder screen after a new empty project has been created
        domManipulator.renderEmptyProjectPlaceholder(todos, display);

        //update local storage
        localStorage.setItem("todos", JSON.stringify(todos));

    }

    function checkEmptyProject(todos, display) {
        
        
        // get an object of only the custom projects
        const projectsObject = Object.assign({}, todos);
        delete projectsObject.home;
        delete projectsObject.today;
        delete projectsObject.week;

        // only delete empty custom projects
        if (!['home', 'week', 'today'].includes(getCurrentProject())) {
            // deletes only the current empty project
            if (projectsObject[getCurrentProject()].length < 1) {
                
                delete todos[getCurrentProject()];
                domManipulator.renderProjectNames(todos, display);
                
                // change folder to home
                
                changeCurrentProject('home');
                domManipulator.renderAllToDos(todos, display);

                // update nave link to show home active
                document.querySelector('.nav').children.item(0).classList.add('nav__selected');
                console.log(document.querySelector('.nav').children.item(0));
            }
        }
        

        // deletes all empty projects
        // for (const project in projectsObject) {
        //     console.log(project);
        //     console.log(projectsObject[project]);
        //     console.log(projectsObject[project].length);
        //     if (projectsObject[project].length < 1) {
        //         delete todos[project];
        //         domManipulator.renderProjectNames(todos, display);
        //     }
        // }

        
        
    }

    return {
        changeCurrentProject,
        getCurrentProject,
        createToDo,
        addNewToDo,
        editToDo,
        deleteToDo,
        addNewProject,
        checkEmptyProject
    }
})();

// To Do data manager 
export const notesManager = (function () {

    var colc;
    

    function arrangeNotes(notes) {

        document.querySelector('.main').innerHTML = `<div class="grid">
                                                        <div class="grid-col grid-col--1">

                                                        </div>
                                                        <div class="grid-col grid-col--2">

                                                        </div>
                                                        <div class="grid-col grid-col--3">

                                                     </div>`
        const grid = document.querySelector('.grid');
       
        // if there is a colc grid already built, delete it so can make a new one.
        // i tried so many ways to update the grid and this is what works.
        if (typeof colc !== 'undefined') {
            colc.destroy();
            grid.innerHTML = `<div class="grid-col grid-col--1">

                                  </div>
                                  <div class="grid-col grid-col--2">

                                  </div>
                                  <div class="grid-col grid-col--3">

                              </div>`;

        }

        // inititialise colcade masonry layout
        colc = new Colcade( '.grid', {
            columns: '.grid-col',
            items: '.note'
            });

        

        // create note elements and append to colc
        notes.forEach((note, i) => {

            const noteBody = document.createElement('div');
            noteBody.classList.add('note');
            // associate element with position in array
            noteBody.setAttribute('data-index', i);

            const noteClose = document.createElement('div');
            noteClose.classList.add('note__close');
            noteClose.innerHTML = '&times;';
            noteClose.addEventListener('click', e => deleteNote(e, notes));

            const noteTitle = document.createElement('div');
            noteTitle.classList.add('note__title');
            noteTitle.textContent = note.title;
            noteTitle.setAttribute('contenteditable', 'true');
            noteTitle.setAttribute('spellcheck', 'false');
            // edit title event listener
            noteTitle.addEventListener('input', e => editNote(e, notes));

            const noteText = document.createElement('div');
            noteText.classList.add('note__text');
            noteText.textContent = note.text;
            noteText.setAttribute('contenteditable', 'true');
            noteText.setAttribute('spellcheck', 'false');
            // edit title event listener
            noteText.addEventListener('input', e => editNote(e, notes));

            noteBody.appendChild(noteClose);
            noteBody.appendChild(noteTitle);
            noteBody.appendChild(noteText);

            colc.append(noteBody);
     
        })

    }

    function createNote(title, text) {
        return {
            title,
            text
        }
    }

    function addNewNote(e, notes, overlay, form, display) {

        const noteTitle = document.querySelector('#new-note-title').value;
        const noteText = document.querySelector('#new-note-text').value;

        const newNote = createNote(noteTitle, noteText);
        notes.unshift(newNote);

        arrangeNotes(notes);
        // sets nav active link to 'notes' 
        document.querySelector('#notes-nav').click();
        
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
            // reset add new form to show add todo
            document.querySelector('#new-note-menu').style.display = "none";
        
            document.querySelector('#new-todo-menu').style.display = "flex";
        })

        // save notes to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    // delete selected note and refresh the notes
    function deleteNote(e, notes) {
        console.log(notes);
        const i = e.target.parentElement.dataset.index;
        notes.splice(i, 1);
        arrangeNotes(notes);

        // save notes to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    // edit note
    function editNote(e, notes) {
        
        // toEdit returns "title" or "note" depending on what is changed
        const toEdit = e.target.classList[0].slice(6);
        const i = e.target.parentElement.dataset.index;
        const newText = e.target.textContent;

        if (toEdit === "title") {
            notes[i].title = newText;  
        } else if (toEdit ==="text") {
            notes[i].text = newText;
        }
        // console.log('editing note');

        // save notes to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
        
    }

    

    return {
        arrangeNotes,
        createNote,
        addNewNote,
        deleteNote,
        editNote
    }
})();