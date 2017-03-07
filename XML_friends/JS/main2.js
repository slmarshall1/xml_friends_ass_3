var ourRequest = new XMLHttpRequest();
ourRequest.open("GET","https://raw.githubusercontent.com/slmarshall1/xml_friends_ass_3/aec1631471b65fcf0cf6669af1a5e0faedbc4034/XML_friends/friends.xml");
ourRequest.onload = function (){

	console.log(ourRequest.responseText);
	var ourData = ourRequest.responseText;
	;
};

ourRequest.send();
