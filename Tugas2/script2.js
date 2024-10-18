document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskValue = taskInput.value;

  if (taskValue.trim() !== '') {
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');

    let taskText = document.createElement('span');
    taskText.innerText = taskValue;
    li.appendChild(taskText);

    // Create a button container to group Edit and Delete buttons
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = function () {
      let newTaskValue = prompt('Edit your task:', taskText.innerText);
      if (newTaskValue && newTaskValue.trim() !== '') {
        taskText.innerText = newTaskValue;
      }
    };
    buttonContainer.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
    buttonContainer.appendChild(deleteButton);

    // Append button container to the list item
    li.appendChild(buttonContainer);

    // Append list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  } else {
    alert('Please enter a task');
  }
}
