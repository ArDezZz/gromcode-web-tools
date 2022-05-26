import { initTodoListHandlers } from './scripts/todoList.js';
import { renderTasks } from './scripts/renderer.js';
import { getTasksList } from './scripts/tasksGateway.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    renderTasks(tasksList);
    initTodoListHandlers();
  });
});
