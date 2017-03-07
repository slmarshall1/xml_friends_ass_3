var ourRequest = new XMLHttpRequest();
ourRequest.open("GET","https://raw.githubusercontent.com/slmarshall1/xml_friends_ass_3/6da9af2ade52d9493c0862c133c954e621597d04/XML_friends/friends.xml");
ourRequest.onload = function (){

	//console.log(ourRequest.responseText);
	var ourData = ourRequest.responseText;
	console.log(ourData);
};

ourRequest.send();
