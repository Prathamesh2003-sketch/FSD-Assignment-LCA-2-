// Store and manage tasks
function addTask() {

    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    // Do not add an empty task
    if (!text) {
        alert("Please type a task first.");
        input.focus();
        return;
    }

    // Create task container
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Task name
    const taskName = document.createElement("span");
    taskName.classList.add("task-text");
    taskName.textContent = text;

    // Complete button
    const complete = document.createElement("button");
    complete.classList.add("task-button", "complete-btn");
    complete.textContent = "Complete";

    complete.addEventListener("click", function () {

        taskItem.classList.toggle("completed");

        complete.textContent =
            taskItem.classList.contains("completed")
                ? "Undo"
                : "Complete";

        refreshStats();
    });


    // Delete button
    const remove = document.createElement("button");
    remove.classList.add("task-button", "delete-btn");
    remove.textContent = "Delete";

    remove.addEventListener("click", function () {

        taskItem.remove();

        refreshStats();
        showEmptyMessage();
    });


    // Add everything to task item
    taskItem.append(taskName, complete, remove);

    // Add task to the list
    document.getElementById("taskList").appendChild(taskItem);

    // Reset input
    input.value = "";
    input.focus();

    refreshStats();
    showEmptyMessage();
}


// Update task numbers
function refreshStats() {

    const allTasks =
        document.querySelectorAll("#taskList .task-item");

    const finishedTasks =
        document.querySelectorAll("#taskList .completed");

    const total = allTasks.length;
    const completed = finishedTasks.length;
    const pending = total - completed;


    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent =
        completed;

    document.getElementById("pendingTasks").textContent =
        pending;
}


// Show or hide empty message
function showEmptyMessage() {

    const list =
        document.getElementById("taskList");

    const message =
        document.getElementById("emptyMessage");


    if (list.children.length === 0) {

        message.style.display = "block";

    } else {

        message.style.display = "none";

    }
}


// Remove completed tasks
function clearCompleted() {

    const finished =
        document.querySelectorAll(
            "#taskList .completed"
        );

    finished.forEach(task => task.remove());

    refreshStats();
    showEmptyMessage();
}


// Add task using Enter key
function handleEnter(event) {

    if (event.key === "Enter") {
        addTask();
    }
}


// Initialize application
refreshStats();
showEmptyMessage();