import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
document.addEventListener('DOMContentLoaded', function () {
  getTasksList().then(function (tasksList) {
    renderTasks(tasksList);
    initTodoListHandlers();
  });
});