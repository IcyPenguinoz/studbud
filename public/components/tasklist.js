const form = document.getElementById("taskform")
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
/* Added a > div to direct the tasklist inside div container - for flexbox element*/
var tasklist = document.querySelector("#tasklist > ul > div");

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

})

// var taskListArray = [];

function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear(); 
  let task = {
    id: Date.now(), 
    taskDescription,
    dueDate,
    dateCreated,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };
  taskListArray.push(task);
  console.log(taskListArray);
  renderTask(task);
  
}


function renderTask(task){

  updateEmpty();

  // Create HTML elements
  //Find way to add all elements, e.g. task, due date, completion time etc to 1 task 
  let item = document.createElement("li");
  item.classList.add("task-list-boxes");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<h2>" + task.taskDescription + "</h2>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
  + "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
  tasklist.appendChild(item);



  // Extra Task DOM elements 
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);


  //Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
  })

  // Clear the input form 
  form.reset();
}


function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1);
  }
  return arr;
}

function updateEmpty(){
  if (taskListArray.length > 0){
    document.getElementById('emptylist').style.display = 'none';
  } else {
    document.getElementById('emptylist').style.display = 'block';
  }
}