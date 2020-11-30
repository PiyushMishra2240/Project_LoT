function todolist() 
{
    var item = document.getElementById("todoinput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("UserUL").appendChild(newItem);

	
}
