//your code here

function startDragging(event) {
	event.dataTransfer.setData("text" , event.target.id);
}

function allowDrop(event) {
	event.preventDefault();
}


function dropped(event) {
	console.log(event.target);
	const temp_id = event.target.id;
	const data_id = event.dataTransfer.getData("text");
	const container = document.getElementById(data_id);
	container.id = temp_id;
	event.target.id = data_id;
	
}