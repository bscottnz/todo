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
const renderWindow = document.querySelector('.main');
const openForm = document.querySelector('.new-todo');
const closeForm = document.querySelector('.create-new__close');
const overlay = document.querySelector('.overlay');
// todo checkbox
// const checkBoxes = document.querySelectorAll('.todo__complete');
// array of todo items
const todos = [];

todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("brush teef", "low", "june 12th"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("sniff coke", "high", "december 11th"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("scratch nutz", "high", "may 1st"));
todos.push((0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.toDoItemFactory)("feed jimmy", "medium", "april 16th"));


(0,_todoItemFunctions_js__WEBPACK_IMPORTED_MODULE_0__.renderToDos)(todos, renderWindow);



openForm.addEventListener('click', () => {
    overlay.style.display = "flex";
})

closeForm.addEventListener('click', () => {
    overlay.style.display = "none";
})



// checkBoxes.forEach(checkBox => {
//     checkBox.addEventListener('click', toggleCheckBox);
// })



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
/* harmony export */   "renderToDos": () => /* binding */ renderToDos
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

    // element.innerHTML = "" 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0l0ZW1GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRjs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsc0VBQWU7QUFDMUIsV0FBVyxzRUFBZTtBQUMxQixXQUFXLHNFQUFlO0FBQzFCLFdBQVcsc0VBQWU7OztBQUcxQixrRUFBVzs7OztBQUlYO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0o7QUFDTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dG9nZ2xlQ2hlY2tCb3gsIHRvRG9JdGVtRmFjdG9yeSwgcmVuZGVyVG9Eb3N9IGZyb20gXCIuL3RvZG9JdGVtRnVuY3Rpb25zLmpzXCJcblxuLy8gbWFpbiB3aW5kb3cgdG8gcmVuZGVyIHRvXG5jb25zdCByZW5kZXJXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3X19jbG9zZScpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4vLyB0b2RvIGNoZWNrYm94XG4vLyBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9fX2NvbXBsZXRlJyk7XG4vLyBhcnJheSBvZiB0b2RvIGl0ZW1zXG5jb25zdCB0b2RvcyA9IFtdO1xuXG50b2Rvcy5wdXNoKHRvRG9JdGVtRmFjdG9yeShcImJydXNoIHRlZWZcIiwgXCJsb3dcIiwgXCJqdW5lIDEydGhcIikpO1xudG9kb3MucHVzaCh0b0RvSXRlbUZhY3RvcnkoXCJzbmlmZiBjb2tlXCIsIFwiaGlnaFwiLCBcImRlY2VtYmVyIDExdGhcIikpO1xudG9kb3MucHVzaCh0b0RvSXRlbUZhY3RvcnkoXCJzY3JhdGNoIG51dHpcIiwgXCJoaWdoXCIsIFwibWF5IDFzdFwiKSk7XG50b2Rvcy5wdXNoKHRvRG9JdGVtRmFjdG9yeShcImZlZWQgamltbXlcIiwgXCJtZWRpdW1cIiwgXCJhcHJpbCAxNnRoXCIpKTtcblxuXG5yZW5kZXJUb0Rvcyh0b2RvcywgcmVuZGVyV2luZG93KTtcblxuXG5cbm9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSlcblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuXG5cbi8vIGNoZWNrQm94ZXMuZm9yRWFjaChjaGVja0JveCA9PiB7XG4vLyAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDaGVja0JveCk7XG4vLyB9KVxuXG4iLCJcbi8vIHRvZ2dsZXMgdGhlIGNoZWNrIGJveCBvZiB0aGUgdG9kbyBpdGVtIGFuZCBkaW1zIHRoZSBpY29ucyAvIHRleHRcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDaGVja0JveChlKSB7XG5cbiAgICBjb25zdCB0b0RvID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCB0b0RvSXRlbXMgPSB0b0RvLmNoaWxkcmVuO1xuICAgIFxuICAgIC8vIHRvZG8gY2hlY2tib3hcbiAgICB0b0RvSXRlbXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndG9kb19fY29tcGxldGUtY2hlY2tlZCcpO1xuICAgIC8vIHRvZG8gdGl0bGVcbiAgICB0b0RvSXRlbXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgndG9kb19fdGl0bGUtY2hlY2tlZCcpO1xuICAgIC8vIHRvZG8gZGV0YWlscyBidXR0b25cbiAgICB0b0RvSXRlbXNbMl0uY2xhc3NMaXN0LnRvZ2dsZSgndG9kb19fZGV0YWlsLWNoZWNrZWQnKTtcbiAgICAvLyB0b2RvIGRhdGVcbiAgICB0b0RvSXRlbXNbM10uY2xhc3NMaXN0LnRvZ2dsZSgndG9kb19fZGF0ZS1jaGVja2VkJyk7XG4gICAgLy8gdG9kbyBkZWxldGUgaWNvblxuICAgIHRvRG9JdGVtc1s0XS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvX19pY29uLWNoZWNrZWQnKTtcbiAgICBcbn1cblxuLy8gY3JlYXRlcyBhIHRvZG8gaXRlbSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiB0b0RvSXRlbUZhY3RvcnkobmFtZSwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgZGF0ZVxuICAgIH1cbn1cblxuLy8gcmVuZGVycyB0b2RvIGl0ZW1zIHRvIHRoZSBzY3JlZW4gXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb3ModG9Eb0xpc3QsIGVsZW1lbnQpIHtcblxuICAgIC8vIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIiBcblxuICAgIHRvRG9MaXN0LmZvckVhY2godG9kbyA9PiB7XG5cbiAgICAgICAgY29uc3QgdG9Eb0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0JvZHkuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICB0b0RvQm9keS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3RvZG8ucHJpb3JpdHl9YCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b0RvQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ3RvZG9fX2NvbXBsZXRlJyk7XG4gICAgICAgIHRvRG9DaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNoZWNrQm94KTtcblxuICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9fX3RpdGxlJyk7XG4gICAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcblxuICAgICAgICBjb25zdCB0b0RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvX19kZXRhaWwnKTtcbiAgICAgICAgdG9Eb0RldGFpbHMudGV4dENvbnRlbnQgPSAnZGV0YWlscyc7XG5cbiAgICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kb19fZGF0ZScpO1xuICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcblxuICAgICAgICBjb25zdCB0b0RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIHRvRG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kb19faWNvbicpXG5cbiAgICAgICAgY29uc3QgdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ1c2VcIik7XG4gICAgICAgIHVzZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICd4bGluazpocmVmJywgJy4uL2ltZy9pY29ucy5zdmcjaWNvbi1iaW4nKVxuICAgICAgICB0b0RvRGVsZXRlLmFwcGVuZENoaWxkKHVzZSk7XG5cbiAgICAgICAgdG9Eb0JvZHkuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrQm94KTtcbiAgICAgICAgdG9Eb0JvZHkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICAgICAgdG9Eb0JvZHkuYXBwZW5kQ2hpbGQodG9Eb0RldGFpbHMpO1xuICAgICAgICB0b0RvQm9keS5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG4gICAgICAgIHRvRG9Cb2R5LmFwcGVuZENoaWxkKHRvRG9EZWxldGUpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodG9Eb0JvZHkpO1xuICAgIH0pXG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==