document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskList').addEventListener('click', manageTasks);

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        let li = document.createElement('li');
        li.innerHTML = `${taskValue} <button class="deleteBtn">Delete</button>`;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
}

function manageTasks(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    } else if (e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    }
}
