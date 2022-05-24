import { renderTasks } from './renderer.js';
import { deleteTaskFromServer, getTasksList } from './tasksGateway.js';
export var onDeleteTask = function onDeleteTask(taskId) {
  var listItemElem = document.querySelectorAll('.list-item');
};