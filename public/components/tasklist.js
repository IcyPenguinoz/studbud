const form = document.getElementById("taskform")
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.querySelector("#tasklist > ul");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
  console.log(taskList);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear(); 
  let task = {
    taskDescription,
    dueDate,
    dateCreated,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
  
}


function renderTask(task){
  // Create HTML elements
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";

  tasklist.appendChild(item)

  // Extra Task DOM elements 
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);


  //Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    item.remove();
  })

  // Clear the input form 
  form.reset();
}