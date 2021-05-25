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

var taskListArray = [];

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
 
 /* Then you'll need to add the element to the page */
  let item = document.createElement("div");
  
  item.classList.add("task-list-boxes");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<h2>" + task.taskDescription + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
  + "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
  tasklist.appendChild(item);



  // Extra Task DOM elements 


  //Done Button
  let doneButton = document.createElement("button");
  doneButton.classList.add("done-button");
  let doneButtonText = document.createTextNode("Done");
  doneButton.appendChild(doneButtonText);

  //Not Done Button
  let notDoneButton = document.createElement("button");
  notDoneButton.classList.add("not-done-button");
  let notDoneText = document.createTextNode("Not Done");
  notDoneButton.appendChild(notDoneText);

  //button div container - to align positioning
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-list-buttons");
  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(notDoneButton);
  //btnContainer.innerHTML = '<button class = "done-button"> Done </button>' + '<button class = "not-done-button"> Not Done </button>';
  item.appendChild(btnContainer);

  //Problem is that its not appending the individual buttons to item
  //Could do appendChild to btnContainer --> appendChild worked

  

  




  //Event Listeners for DOM elements; current problem is that only done/not done button works for 1st div box, doesn't work for others
  //It also gets rid of all div elements 
  doneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
  })


  notDoneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
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