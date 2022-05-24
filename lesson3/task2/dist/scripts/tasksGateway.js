import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var baseUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/tasks';
export var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
};
export var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export var updateTask = function updateTask(taskId, updateTaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updateTaskData)
  });
};
export var deleteTaskFromServer = function deleteTaskFromServer(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};