var todos = ["Jump off a pier", "impale Rusty", "Smash a mouse"];
var input = "start"

while (input !== "quit") {
//handle input
if (input === "list") {
    listTodos();
} else if (input === "new") {
    addTodos();
} else if (input === "delete") {
    deleteTodos();
}

//ask for more new input
input = prompt("What do you want to do today?");
}

alert("Ok, you're out");

function listTodos() {
    console.log("************");
    todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
    });
    console.log("************");
    }

function addTodos() {
   // ask for new item
   var newTodo = prompt("What are we adding, boss?")
   // add newTodo to the todos array
   todos.push(newTodo);
   alert("Ok, it's added.");
  }

function deleteTodos() {
  //ask for target index
  var index = prompt("I'll need an index, boss");

  //delete target
  //splice()
  todos.splice(index, 1);
  alert("Item Deleted!");
  }