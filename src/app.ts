import { Todo } from "./classes/Todo.js"

const task1 = new Todo();

const addButton = document.getElementById('addButton') as HTMLButtonElement
const inputText = document.getElementById('taskInput') as HTMLInputElement
const taskLists = document.getElementById('taskLists') as HTMLUListElement


addButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        task1.addTask(inputText.value)
        updateUI();
    } else {
        console.log("Input empty");
    }
})

function updateUI() {
    taskLists.innerHTML = ""
    let tasks = task1.getTasks()
    tasks.forEach((task) => {
        const li = document.createElement("li")
        li.textContent = task;
        taskLists.appendChild(li);
    })
}