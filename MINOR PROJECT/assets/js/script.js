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

        // Create a new list item with Bootstrap classes
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${task}</span>
            <span>${deadline}</span>
            <button class="btn btn-danger btn-sm remove-btn">Remove</button>
        `;
        taskList.appendChild(li);

        // Clear the input fields
        taskInput.value = '';
        deadlineInput.value = '';

        // Add event listener to the remove button
        li.querySelector('.remove-btn').addEventListener('click', function () {
            if (confirm('Are you sure you want to remove this task?')) {
                li.remove();
            }
        });
    });

    // Set minimum date for the deadline input to today's date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('deadlineInput').setAttribute('min', today);
});