import { onCreateTask } from './createTask.js';
import { onDeleteTask } from './deleteTask.js';
import { deleteTaskFromServer, updateTask } from './tasksGateway.js';

const todoListElem = document.querySelector('.list');

export const onClickTask = event => {
  // if (event.target.classList.contains("list-item__checkbox")) {
  // todoListElem.addEventListener("click", onToggleTask);
  // } else if (event.target.classList.contains("list-item__delete-btn")) {
  // const deleteBtnElem = document.querySelector(".list-item__delete-btn");
  // deleteBtnElem.addEventListener("click", onDeleteTask);
  // }
  const elem = event.target;
  const taskId = elem.dataset.id;

  if (elem.classList.contains('list-item__delete-btn')) {
    deleteTaskFromServer(taskId);
    elem.closest('.list-item').remove();

    return;
  }

  if (elem.classList.contains('list-item__checkbox')) {
    // elem.closest(".list-item").;

    const taskElem = elem.closest('.list-item');
    taskElem.classList.toggle('list-item_done');
    const spanElem = taskElem.querySelector('.list-item__text');

    const updatedTask = {
      text: spanElem.textContent,
      done: elem.checked,
    };

    updateTask(taskId, updatedTask);
  }
};

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  todoListElem.addEventListener('click', onClickTask);
};
