document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list")


    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
        function addTask(taskText, save = true) {
            const taskText = taskInput.value.trim();
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        
        //if the user add a task
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText

            const removeBtn = document.createElement("button")
            removeBtn.textContent = "Remove"
            removeBtn.classList.add("remove-btn")

            //remove a task
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            }

            // add a task
            li.appendChild(removeBtn)
            taskList.appendChild(li);
            taskInput.value = ""

        }
        else {
            alert("Please enter a task")
        }

        addButton.addEventListener("click", addTask);
        taskInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                addTask();
            }
        })
    }
    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();

    });
    document.addEventListener("DOMContentLoaded", addTask())
    document.addEventListener("DOMContentLoaded", loadTasks())
})

