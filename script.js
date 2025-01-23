document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list")

    function addTask() {
        let taskText = taskInput.value.trim();

        //if the user add a task
        if (taskText !== "") {
            const list = document.createElement("li");
            list.textContent = taskText

            const removeBtn = Document.createElement("button")
            removeBtn.textContent = "Remove"
            removeBtn.className.add("remove-btn")

            //remove a task
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            }

            // add a task
            li.appendChild(removeBtn)
            taskList.appendChild(li);
            taskInput.value = ""

            addButton.addEventListener("click",addTask);
            taskInput.addEventListener("keypress",function(event){
                if (event.key =="Enter") {
                    addTask();
                }
            })


        } else {
            alert("Please enter a task")
        }

    }

    document.addEventListener("DOMContentLoaded",addTask())
})