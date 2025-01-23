document.addEventListener("DOMContentLoaded",function(){
    const addButton =document.getElementById("add-task-btn");
    const taskInput=document.getElementById("task-input");
    const taskList=document.getElementById("task-list")

     function addTask(){
        let taskText= taskInput.value.trim() ;

        //if the user add a task
        if (!taskText ===""){
            let list = document.createElement("li");
            list.textContent=taskText

            let removeBtn =Document.createElement("button")
            removeBtn.textContent="Remove"
            removeBtn.classList.add("remove-btn")

            remove.Document.addEventListener("onclick", function(e){
                if (e.target.className == "remove-btn") {
                    const li=e.target.parentElement;
                    remove.removeChild(li);
                }
            })

        }else{
            alert("Please enter a task")
        }

    }

})