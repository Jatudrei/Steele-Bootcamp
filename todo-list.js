var todos = ["Jump off a pier", "impale Rusty", "Smash a mouse"];
var input = "start"

while (input !== "quit") {
//handle input
if (input === "list") {
    console.log(todos);
} else if (input === "new") {
  // ask for new item
  var newTodo = prompt("What are we adding, boss?")
  // add newTodo to the todos array
  todos.push(newTodo);
}

//ask for more new input
input = prompt("What do you want to do today?");
}
alert("Ok, you're out");