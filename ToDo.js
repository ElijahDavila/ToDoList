
var newListItem = document.createElement('li');
		newListItem.innerHTML = "Try adding a new item";

var list = document.querySelector('ul');
		list.appendChild(newListItem);

function newNode (){
	var inputVal = document.getElementById('addNew').value;
	var newLI = document.createElement('li');
		newLI.innerHTML = inputVal;
var list = document.querySelector('ul');
		list.appendChild(newLI);
}