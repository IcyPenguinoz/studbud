var words = document.getElementById("#inputField").value.split(" ");
var acronym = "";
for (var i = 0; i < words.length; i += 1) {
    acronym += words[i].charAt(0).toUpperCase();
}
var report = function() {
    document.getElementById("result").innerHTML = acronym;
};
$('#generate').click(function(){
    var myVar = $('#phrase').val();

    var words = myVar.split(" ");
    var acronym = words.map(function(word) {
    return word.charAt(0).toUpperCase();
    }).join('');
    $("#result").html(acronym);

    console.log(myVar);
});