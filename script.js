const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");

const startConf = () => {
    //
    const todos = localStorage.getItem("todos");
    if (!todos) {
        localStorage.setItem("todos" , JSON.stringify([]))
    }
}

startConf();

const addTodo = (e) => {
    e.preventDefault();

    todoText = input.value;

    const todo = {
        text: todoText,
        isCompleted: false,
    };

    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
    console.log("todos");
}

form.addEventListener("submit" , addTodo);