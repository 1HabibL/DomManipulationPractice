/* Give form functionality  */
const formInfo = document.getElementById("task-to-do-list-form")
const displaytaskTitle = document.getElementById("displayTaskTitle")
const displaytaskDescription = document.getElementById('displayTaskDescription')
const displayDueDate = document.getElementById('displayTaskDueDate')
const displayPriority = document.getElementById('displayUrgency')

window.addEventListener("load", function () {
    const actualTask = localStorage.getItem("actualTask");
    const minorDesc = localStorage.getItem("minorDesc");
    const dueDate = localStorage.getItem("due-date");
    const priority = localStorage.getItem("priority");

    if (actualTask) displaytaskTitle.textContent = actualTask;
    if (minorDesc) displaytaskDescription.textContent = minorDesc;
    if (dueDate) displayDueDate.textContent = dueDate;
    if (priority) displayPriority.textContent = priority;
})


formInfo.addEventListener("submit", function (event) {
event.preventDefault();

//form values
const actualTask = document.getElementById("actualTask").value
const minorDesc = document.getElementById("minorDesc").value
const dueDate = document.getElementById("due-date").value
const priority = document.getElementById("priority").value

// Save to localStorage
localStorage.setItem("actualTask", actualTask);
localStorage.setItem("minorDesc", minorDesc);
localStorage.setItem("due-date", dueDate);
localStorage.setItem("priority", priority);

displaytaskTitle.textContent = actualTask;
displaytaskDescription.textContent = minorDesc;
displayDueDate.textContent = dueDate;
displayPriority.textContent = priority;

hiddenForm.classList.toggle('hidden-form')
hiddenForm.classList.toggle('visible-form')
 // Clear the form (optional)
 formInfo.reset();
})
/* Give form functionality  */