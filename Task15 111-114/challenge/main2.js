let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
// Empty Array TO Store The Tasks
let arrayOfTasks = [];

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); //Add Task To Array of Tasks
    input.value = ""; // empty input field هفضيه
  }
};

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    complete: false,
  };
  // Push Task to Array of Tasks
  arrayOfTasks.push(task);
  addElementsToPageFrom(arrayOfTasks);
}
// Add Tasks to Page
function addElementsToPageFrom(arrayOfTasks) {
  // Empty TaskDiv
  tasksDiv.innerHTML = "";
  // Loop on arrayOfTasks
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    console.log(div);
  });
}
