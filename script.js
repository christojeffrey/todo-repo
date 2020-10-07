console.log('weweweewe');
document.getElementById("add-button").addEventListener("click",add_button_clicked);
function add_button_clicked(){
    console.log("add button clicked");
    var todo_text = document.getElementById("text-area").value;
    console.log(todo_text);
    document.getElementById("text-area").value = "";

    //creating list
    var list = document.createElement("li");
    list.classList.add("list");
    var node_text = document.createTextNode(todo_text);
    list.appendChild(node_text);

    //creating trash-button,appending it to list
    var trash_button = document.createElement("button");
    trash_button.classList.add("trash-button");
    node_text = document.createTextNode("trash");
    trash_button.appendChild(node_text);
    list.appendChild(trash_button);

    //creating complete-button, appending it to list
    var complete_button = document.createElement("button");
    complete_button.classList.add("complete-button");
    node_text = document.createTextNode("complete");
    complete_button.appendChild(node_text);
    list.appendChild(complete_button);

    //appending list to todo-list
    var todo_list = document.getElementById("todo-list");
    todo_list.appendChild(list);


 
    }
document.getElementsByClassName("trash-button").addEventListener("click", trashed);
function trashed(){
    console.log("trashed!");
}