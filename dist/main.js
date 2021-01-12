/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFunctions.js */ "./src/todoItemFunctions.js");


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

todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("brush teef", "low", "june 12th"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("sniff coke", "high", "december 11th"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("scratch nutz", "high", "may 1st"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("feed jimmy", "medium", "april 16th"));


(0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderToDos)(todos, display);



openForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
})



closeForm.addEventListener('click', () => {
    overlay.classList.toggle('overlay-invisible');
    addToDoForm.classList.toggle('create-new-open');
    
})

addToDoForm.addEventListener('submit', e => (0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.addNewToDo)(e, todos, display, overlay, addToDoForm));





/***/ }),

/***/ "./src/todoItemFunctions.js":
/*!**********************************!*\
  !*** ./src/todoItemFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleCheckBox": () => /* binding */ toggleCheckBox,
/* harmony export */   "toDoItemFactory": () => /* binding */ toDoItemFactory,
/* harmony export */   "renderToDos": () => /* binding */ renderToDos,
/* harmony export */   "addNewToDo": () => /* binding */ addNewToDo
/* harmony export */ });

// toggles the check box of the todo item and dims the icons / text
function toggleCheckBox(e) {

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

// creates a todo item object
function toDoItemFactory(name, priority, date) {
    return {
        name,
        priority,
        date
    }
}

// renders todo items to the screen 
function renderToDos(toDoList, element) {

    element.innerHTML = "" 

    toDoList.forEach(todo => {

        const toDoBody = document.createElement('div');
        toDoBody.classList.add('todo');
        toDoBody.classList.add(`priority-${todo.priority}`);
        
        const toDoCheckBox = document.createElement('div');
        toDoCheckBox.classList.add('todo__complete');
        toDoCheckBox.addEventListener('click', toggleCheckBox);

        const toDoTitle = document.createElement('div');
        toDoTitle.classList.add('todo__title');
        toDoTitle.textContent = todo.name;

        const toDoDetails = document.createElement('div');
        toDoDetails.classList.add('todo__detail');
        toDoDetails.textContent = 'details';

        const toDoDate = document.createElement('div');
        toDoDate.classList.add('todo__date');
        toDoDate.textContent = todo.date;

        const toDoDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        toDoDelete.classList.add('todo__icon')

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

// grab form input and create new book object
function addNewToDo(e, toDoList, display, overlay, form) {
    console.log('hello');
    e.preventDefault();
     
    const toDoTitle = (document.querySelector('#new-todo-title')).value;
    const toDoDate = (document.querySelector('#new-todo-date')).value;
    
    const toDoPriority = (document.querySelector('[name="priority"]:checked')).value;
    form.reset();

    const newToDo = toDoItemFactory(toDoTitle, toDoPriority, toDoDate);
    // myLibrary.push(newBook);
    // console.log(newToDo);
    // populateLibrary();

    toDoList.push(newToDo);
    renderToDos(toDoList, display);


    overlay.classList.toggle('overlay-visible');
    form.classList.toggle('create-new-open');
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0l0ZW1GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErRjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxzRUFBZTtBQUMxQixXQUFXLHNFQUFlO0FBQzFCLFdBQVcsc0VBQWU7QUFDMUIsV0FBVyxzRUFBZTs7O0FBRzFCLGtFQUFXOzs7O0FBSVg7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELDRDQUE0QyxpRUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DdEQ7QUFDTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b2dnbGVDaGVja0JveCwgdG9Eb0l0ZW1GYWN0b3J5LCByZW5kZXJUb0RvcywgYWRkTmV3VG9Eb30gZnJvbSBcIi4vdG9kb0l0ZW1GdW5jdGlvbnMuanNcIlxuXG4vLyBtYWluIHdpbmRvdyB0byByZW5kZXIgdG9cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3X19jbG9zZScpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBhZGRUb0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3Jyk7XG4vLyB0b2RvIGNoZWNrYm94XG4vLyBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9fX2NvbXBsZXRlJyk7XG4vLyBhcnJheSBvZiB0b2RvIGl0ZW1zXG5jb25zdCB0b2RvcyA9IFtdO1xuXG50b2Rvcy5wdXNoKHRvRG9JdGVtRmFjdG9yeShcImJydXNoIHRlZWZcIiwgXCJsb3dcIiwgXCJqdW5lIDEydGhcIikpO1xudG9kb3MucHVzaCh0b0RvSXRlbUZhY3RvcnkoXCJzbmlmZiBjb2tlXCIsIFwiaGlnaFwiLCBcImRlY2VtYmVyIDExdGhcIikpO1xudG9kb3MucHVzaCh0b0RvSXRlbUZhY3RvcnkoXCJzY3JhdGNoIG51dHpcIiwgXCJoaWdoXCIsIFwibWF5IDFzdFwiKSk7XG50b2Rvcy5wdXNoKHRvRG9JdGVtRmFjdG9yeShcImZlZWQgamltbXlcIiwgXCJtZWRpdW1cIiwgXCJhcHJpbCAxNnRoXCIpKTtcblxuXG5yZW5kZXJUb0Rvcyh0b2RvcywgZGlzcGxheSk7XG5cblxuXG5vcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktaW52aXNpYmxlJyk7XG4gICAgYWRkVG9Eb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnY3JlYXRlLW5ldy1vcGVuJyk7XG59KVxuXG5cblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1pbnZpc2libGUnKTtcbiAgICBhZGRUb0RvRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdjcmVhdGUtbmV3LW9wZW4nKTtcbiAgICBcbn0pXG5cbmFkZFRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4gYWRkTmV3VG9EbyhlLCB0b2RvcywgZGlzcGxheSwgb3ZlcmxheSwgYWRkVG9Eb0Zvcm0pKTtcblxuXG5cbiIsIlxuLy8gdG9nZ2xlcyB0aGUgY2hlY2sgYm94IG9mIHRoZSB0b2RvIGl0ZW0gYW5kIGRpbXMgdGhlIGljb25zIC8gdGV4dFxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNoZWNrQm94KGUpIHtcblxuICAgIGNvbnN0IHRvRG8gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHRvRG9JdGVtcyA9IHRvRG8uY2hpbGRyZW47XG4gICAgXG4gICAgLy8gdG9kbyBjaGVja2JveFxuICAgIHRvRG9JdGVtc1swXS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvX19jb21wbGV0ZS1jaGVja2VkJyk7XG4gICAgLy8gdG9kbyB0aXRsZVxuICAgIHRvRG9JdGVtc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvX190aXRsZS1jaGVja2VkJyk7XG4gICAgLy8gdG9kbyBkZXRhaWxzIGJ1dHRvblxuICAgIHRvRG9JdGVtc1syXS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvX19kZXRhaWwtY2hlY2tlZCcpO1xuICAgIC8vIHRvZG8gZGF0ZVxuICAgIHRvRG9JdGVtc1szXS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvX19kYXRlLWNoZWNrZWQnKTtcbiAgICAvLyB0b2RvIGRlbGV0ZSBpY29uXG4gICAgdG9Eb0l0ZW1zWzRdLmNsYXNzTGlzdC50b2dnbGUoJ3RvZG9fX2ljb24tY2hlY2tlZCcpO1xuICAgIFxufVxuXG4vLyBjcmVhdGVzIGEgdG9kbyBpdGVtIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHRvRG9JdGVtRmFjdG9yeShuYW1lLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBkYXRlXG4gICAgfVxufVxuXG4vLyByZW5kZXJzIHRvZG8gaXRlbXMgdG8gdGhlIHNjcmVlbiBcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0Rvcyh0b0RvTGlzdCwgZWxlbWVudCkge1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiIFxuXG4gICAgdG9Eb0xpc3QuZm9yRWFjaCh0b2RvID0+IHtcblxuICAgICAgICBjb25zdCB0b0RvQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvQm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIHRvRG9Cb2R5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dG9kby5wcmlvcml0eX1gKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvRG9DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvQ2hlY2tCb3guY2xhc3NMaXN0LmFkZCgndG9kb19fY29tcGxldGUnKTtcbiAgICAgICAgdG9Eb0NoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2hlY2tCb3gpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb19fdGl0bGUnKTtcbiAgICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG9fX2RldGFpbCcpO1xuICAgICAgICB0b0RvRGV0YWlscy50ZXh0Q29udGVudCA9ICdkZXRhaWxzJztcblxuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvX19kYXRlJyk7XG4gICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgdG9Eb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvX19pY29uJylcblxuICAgICAgICBjb25zdCB1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInVzZVwiKTtcbiAgICAgICAgdXNlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ3hsaW5rOmhyZWYnLCAnLi4vaW1nL2ljb25zLnN2ZyNpY29uLWJpbicpXG4gICAgICAgIHRvRG9EZWxldGUuYXBwZW5kQ2hpbGQodXNlKTtcblxuICAgICAgICB0b0RvQm9keS5hcHBlbmRDaGlsZCh0b0RvQ2hlY2tCb3gpO1xuICAgICAgICB0b0RvQm9keS5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICAgICAgICB0b0RvQm9keS5hcHBlbmRDaGlsZCh0b0RvRGV0YWlscyk7XG4gICAgICAgIHRvRG9Cb2R5LmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcbiAgICAgICAgdG9Eb0JvZHkuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0b0RvQm9keSk7XG4gICAgfSlcbn1cblxuLy8gZ3JhYiBmb3JtIGlucHV0IGFuZCBjcmVhdGUgbmV3IGJvb2sgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3VG9EbyhlLCB0b0RvTGlzdCwgZGlzcGxheSwgb3ZlcmxheSwgZm9ybSkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kby10aXRsZScpKS52YWx1ZTtcbiAgICBjb25zdCB0b0RvRGF0ZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tZGF0ZScpKS52YWx1ZTtcbiAgICBcbiAgICBjb25zdCB0b0RvUHJpb3JpdHkgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykpLnZhbHVlO1xuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvSXRlbUZhY3RvcnkodG9Eb1RpdGxlLCB0b0RvUHJpb3JpdHksIHRvRG9EYXRlKTtcbiAgICAvLyBteUxpYnJhcnkucHVzaChuZXdCb29rKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdUb0RvKTtcbiAgICAvLyBwb3B1bGF0ZUxpYnJhcnkoKTtcblxuICAgIHRvRG9MaXN0LnB1c2gobmV3VG9Ebyk7XG4gICAgcmVuZGVyVG9Eb3ModG9Eb0xpc3QsIGRpc3BsYXkpO1xuXG5cbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktdmlzaWJsZScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnY3JlYXRlLW5ldy1vcGVuJyk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==