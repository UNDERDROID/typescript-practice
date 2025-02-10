import { Todo } from "./classes/Todo.js";
const task1 = new Todo();
const addButton = document.getElementById('addButton');
const inputText = document.getElementById('taskInput');
const taskLists = document.getElementById('taskLists');
addButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        task1.addTask(inputText.value, "To do");
        updateUI();
        updateTable();
        console.log(task1.getTasks().length);
    }
    else {
        console.log("Input empty");
    }
});
updateUI();
function updateUI() {
    taskLists.innerHTML = "";
    const tasks = task1.getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = `${task.task}`;
        const select = document.createElement("select");
        const statuses = ["To do", "Doing", "Done"];
        statuses.forEach((status) => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            if (task.status === status) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        select.addEventListener("change", () => {
            task.status = select.value;
            console.log(task.status);
            updateTable();
        });
        li.appendChild(select);
        taskLists.appendChild(li);
    });
}
const td = document.createElement("td");
function createTable() {
    const taskTable = document.getElementById('taskTable');
    if (!taskTable) {
        console.error("Table element not found!");
        return;
    }
    let thead = taskTable.querySelector("thead");
    if (!thead) {
        thead = document.createElement("thead");
        taskTable.appendChild(thead);
    }
    thead.innerHTML = "";
    taskTable.appendChild(thead);
    const tr = document.createElement("tr");
    const headings = ["Tasks", "Status"];
    headings.forEach((heading) => {
        const th = document.createElement("th");
        th.textContent = heading;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
}
function updateTable() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) {
        console.error("Table body not found!");
        return;
    }
    tableBody.innerHTML = "";
    const tasks = task1.getTasks();
    tasks.forEach((task) => {
        const tr = document.createElement("tr");
        const tdTask = document.createElement("td");
        tdTask.textContent = task.task;
        tr.appendChild(tdTask);
        const tdStatus = document.createElement("td");
        tdStatus.textContent = task.status;
        tr.appendChild(tdStatus);
        tableBody.appendChild(tr);
    });
}
createTable();
