const baseUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/tasks';

export const getTasksList = () => {
  return fetch(baseUrl).then(response => {
    return response.json();
  });
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updateTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updateTaskData),
  });
};

export const deleteTaskFromServer = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
