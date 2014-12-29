function findDocumentByIdAndChangeContent () {
	x = document.getElementById("test01");
	x.innerHTML = "You have clicked.";
	// body...

}

function findDocumentByIdAndAddEventListener () {
	y = document.getElementById("test02");
	y.addEventListener("mouseover", function(event){
		if(y.innerHTML.match("mouseover")){
			y.innerHTML="No listened";}
			else{
				y.innerHTML = "mouseover is listened.";
			}
		}, false);
	// body...
}