import { onCreateTask } from './createTask.js';
import { onDeleteTask } from './deleteTask.js';
import { deleteTaskFromServer, updateTask } from './tasksGateway.js';
var todoListElem = document.querySelector('.list');
export var onClickTask = function onClickTask(event) {
  var elem = event.target;
  var taskId = elem.dataset.id;

  if (elem.classList.contains('list-item__delete-btn')) {
    deleteTaskFromServer(taskId);
    elem.closest('.list-item').remove();
    return;
  }

  if (elem.classList.contains('list-item__checkbox')) {
    // elem.closest(".list-item").;
    var taskElem = elem.closest('.list-item');
    taskElem.classList.toggle('list-item_done');
    var spanElem = taskElem.querySelector('.list-item__text');
    var updatedTask = {
      text: spanElem.textContent,
      done: elem.checked
    };
    updateTask(taskId, updatedTask);
  }
};
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  todoListElem.addEventListener('click', onClickTask);
};