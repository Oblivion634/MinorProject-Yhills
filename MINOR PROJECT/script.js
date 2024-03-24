document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const task = taskInput.value.trim();
        const deadline = deadlineInput.value;
        if (task === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
        <span>${task}</span>
        <span>${deadline}</span>
        <button class="remove-btn">Remove</button>
      `;
        taskList.appendChild(li);

        taskInput.value = '';
        deadlineInput.value = '';

        li.querySelector('.remove-btn').addEventListener('click', function () {
            if (confirm('Are you sure you want to remove this task?')) {
                li.remove();
            }
        });
    });
});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// Set minimum date for date input
document.getElementById('deadlineInput').setAttribute('min', today);

