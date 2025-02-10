import { Todo } from "./classes/Todo.js"

const task1 = new Todo();

const addButton = document.getElementById('addButton') as HTMLButtonElement
const inputText = document.getElementById('taskInput') as HTMLInputElement
const taskLists = document.getElementById('taskLists') as HTMLUListElement


addButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        task1.addTask(inputText.value, "To do")
        updateUI();
    } else {
        console.log("Input empty");
    }
})

updateUI();

function updateUI() {
    taskLists.innerHTML = ""
    const tasks = task1.getTasks()
    tasks.forEach((task) => {
        const li = document.createElement("li")
        li.textContent = `${task.task}`;

        const select = document.createElement("select")
        const statuses = ["To do", "Doing", "Done"]
        statuses.forEach((status) => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            if (task.status === status) {
                option.selected = true;
            }
            select.appendChild(option);
        })
        li.appendChild(select);
        taskLists.appendChild(li);
    })
}