const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div class="task-buttons">
      <button class="edit" onclick="editTask(this)">Edit</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}

function editTask(btn) {
  const taskSpan = btn.parentElement.previousElementSibling;
  const newText = prompt("Edit task:", taskSpan.innerText);

  if (newText !== null && newText.trim() !== "") {
    taskSpan.innerText = newText;
  }
}

function toggleComplete(task) {
  task.parentElement.classList.toggle("completed");
}
