var pageCounter = 1;
var friendsContainer = document.getElementById("friends-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
var xttp = new XMLHttpRequest();
 xhttp.open("GET", "https://raw.githubusercontent.com/slmarshall1/xml_friends_ass_3/aec1631471b65fcf0cf6669af1a5e0faedbc4034/XML_friends/friends.xml" + pageCounter + ".js");
xttp.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

  xhttp.send();

pageCounter++;

if(pageCounter >3){
	btn.classList.add("hide-me");
}

});


function renderHTML(data){

var htmlString = "";

for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p>" + data[i].firstName + " is a " + data[i].lastName + ".</p>";
}
friendsContainer.insertAdjacentHTML('beforeend', htmlString);
}


