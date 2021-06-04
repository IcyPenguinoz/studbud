var words = document.getElementById("inputField").value.split(" ");
var acronym = "";
for (var i = 0; i < words.length; i += 1) {
    acronym += words[i].charAt(0).toUpperCase();
}
var report = function() {
    document.getElementById("result").innerHTML = acronym;
};
$('#generate').click(function(){
    var myVar = $('#inputField').val();

    var words = myVar.split(" ");
    var acronym = words.map(function(word) {
    return word.charAt(0).toUpperCase();
    }).join('');
    $("#result").html(acronym); //acronym is variable which should be shown on head/title of div card
    $("#acronymBoxContainer").append("<div class = task-list-boxes>" + "<h2>" + acronym + "</h2>" + "</div>"); //this appends new acronyms to div elements 
    console.log(acronym);

});

/*
let item = document.createElement("div");
  
item.classList.add("task-list-boxes");
item.setAttribute('data-id', task.id);
item.innerHTML = "<h2>" + task.title + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
+ "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
tasklist.appendChild(item);

Can incorporate something like the above for acroynm maker

*/ 