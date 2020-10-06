const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");
//set focus on text input
addTodoInput.focus();

//Add event listener for submitting form.
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );
  addTodoForm.reset();
}

function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
