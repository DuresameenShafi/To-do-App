document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("div");
        taskItem.className = "taskItem";

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});