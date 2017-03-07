var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://raw.githubusercontent.com/slmarshall1/JSON/master/jason_example_" + pageCounter + ".js");
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();

pageCounter++;

if(pageCounter >3){
	btn.classList.add("hide-me");
}

});


function renderHTML(data){

var htmlString = "";

for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
}
animalContainer.insertAdjacentHTML('beforeend', htmlString);
}


