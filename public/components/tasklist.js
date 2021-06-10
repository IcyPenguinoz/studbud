//Declaration of variables on top as well
const form = document.getElementById("taskform")
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
/* Added a > div to direct the tasklist inside div container - for flexbox element*/
var tasklist = document.querySelector("#tasklist > ul > div");

/*
var homeLink = document.querySelector(".button").onclick = function() {
  location.href = "http://localhost:1234/#page1";
  
};

*/

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

var taskListArray = JSON.parse(localStorage.getItem('tasks'));
//Gets value from columnName label input to add a custom column with user input name
var customColumnName = document.getElementById("kanbanColumnName"); 


//Listens to submit button inside modal box
button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  //If the labels inside modal box are empty then send a feedback alert to users to inform them to fill in all fields
  if(task == "" || dueDate == "" || completionTime == "" || estimatedTime == "" || priorityRating == ""){
    alert('You are missing input fields! Be sure to fill in all fields to add your task!');
  //Otherwise if all the labels are filled than add the task to the taskbox container
  } else{
    addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
  }
  
})


//addTask function 
function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear(); 
  let task = {
    id: Date.now(), 
    title: taskDescription,
    dueDate,
    dateCreated,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };
  
  //Code for local storage - setting it inside Kanban
  taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (!taskListArray) {
    taskListArray = [];
  }
  console.log(taskListArray)
  taskListArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskListArray));

  //Adds element to inProgress when entering new task  - shows it on Kanban Board
  //This is because when adding a task it is in progress of either being done or not done depending on what the user picks
  

  console.log(kanban)
  renderTask(task);
  
}


function renderTask(task){
  //If tasklist array is not empty; loop through each task to check that its in there and populate inside item area
  updateEmpty();

  //task-list boxes added after the user submits details from "Task List" modal box
  let item = document.createElement("div");
  
  item.classList.add("task-list-boxes");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<h2>" + task.title + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
  + "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
  tasklist.appendChild(item);



  // Extra Task DOM elements 

  kanban.addElement('_inprogress', task);


  //Done Button
  let doneButton = document.createElement("button");
  doneButton.classList.add("done-button");
  let doneButtonText = document.createTextNode("Done");
  doneButton.appendChild(doneButtonText);

  
  doneButton.onclick = ("click", function(){
    kanban.addElement('_done', task);
    kanban.removeElement('_inprogress', task);
  });


  //Not Done Button
  let notDoneButton = document.createElement("button");
  notDoneButton.classList.add("not-done-button");
  let notDoneText = document.createTextNode("Not Done");
  notDoneButton.appendChild(notDoneText);
  notDoneButton.onclick = ("click", function(){
    kanban.addElement('_todo', task) 
    kanban.removeElement('_inprogress', task);
  });



  //button div container - to align positioning
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-list-buttons");
  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(notDoneButton);
  //btnContainer.innerHTML = '<button class = "done-button"> Done </button>' + '<button class = "not-done-button"> Not Done </button>';
  item.appendChild(btnContainer);

  //Problem is that its not appending the individual buttons to item
  //Could do appendChild to btnContainer --> appendChild worked

  

  




  //Event Listeners for DOM elements
  doneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
  })


  notDoneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
 
  })


  // Clears the input form 
  form.reset();
}

//Removes item from the array 
function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1);
  }
  return arr;
}

//Updates text block
function updateEmpty(){
  let taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (taskListArray.length > 0){
    document.getElementById('emptylist').style.display = 'none';
  } else {
    document.getElementById('emptylist').style.display = 'block';
  }
}

//Kanban Board is initalised after all the above code, alongside defined as well
var kanban = new jKanban({  
    element : '#myKanban',
    gutter  : '15px',
    responsivePercentage: false,
    boards  :[
        {
            'id' : '_todo',
            'title'  : 'To Do',
            'class' : 'info',
            //Item of Kanban is set as the taskListArray stored inside localStorage
            'item'  : taskListArray
        },
        {
            'id' : '_inprogress',
            'title'  : 'In Progress',
            'class' : 'warning',
            'item'  : [
                {
                    'title': 'Hello!'
                }
            ]
        },
        { 
            'id' : '_done',
            'title'  : 'Done',
            'class' : 'success',
            'item'  : [
                {
                    'title':'Finish assignment',
                },
                {
                    'title':'Ok!',
                }
            ]
        }
    ]
});

//addButton to add extra kanban column
var addBoardDefault = document.getElementById('addDefault'); 
//listens to submit button inside "Kanban Board" submit
addBoardDefault.addEventListener('click', function () {
    if (customColumnName.value == ""){ //added value checker - if it is empty, it will send alert and give user feedback
      alert ("You have not entered in your column name!")
    }
    else{
      kanban.addBoards(
        [{
            'id' : '_default',
            'title'  : customColumnName.value, //this gets the input from the form label textbox and makes it as the Kanban column title
            'class' : 'error',
            'item'  : [
                {
                    'title':'Default Item',
                },
                {
                    'title':'Default Item 2',
                }
            ]
        }]
    )
      //alert mentioning column is added after user puts in column name inside label
      alert("Added new column!");
    }
    //resets label form as the user submits new column name
    document.querySelector("#addColumn").reset();
});

