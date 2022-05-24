import { renderTasks, createListItem } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';
export var onCreateTask = function onCreateTask() {
  var todoListElem = document.querySelector('.list');
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  createTask(newTask).then(function (response) {
    return response.json();
  }).then(function (task) {
    return todoListElem.prepend(createListItem(task));
  });
};