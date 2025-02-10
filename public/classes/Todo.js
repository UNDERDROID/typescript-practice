export class Todo {
    constructor() {
        this.tasks = [];
        this.isComplete = false;
    }
    addTask(task, status) {
        this.tasks.push({ task, status });
    }
    showTask() {
        console.log("Current Tasks:", this.tasks);
    }
    getTasks() {
        return this.tasks;
    }
}
