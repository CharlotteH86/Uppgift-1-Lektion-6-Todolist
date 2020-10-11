//variabler som snappar upp information från html dokumentet
const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");
//Sätter fokus på 'input' fältet (där text skrivs som sickas till listan)
addTodoInput.focus();

//addEventlistener som används för vad som händer när man trycker på submit. Lägger till ett nytt fält i litan.
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});
//I slutet av ett 'list item' läggs deleteknappen för att enkelt ta bort fält.
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );
  addTodoForm.reset();
}
//funktion för delete knappen ska ta bort inlagda fält. Samt fokus ska sättas på inputfältet för att enkelt lägga till ny text.
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
