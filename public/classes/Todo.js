export class Todo {
    constructor() {
        this.tasks = [];
        this.isComplete = false;
    }
    addTask(text) {
        this.tasks.push(text);
    }
    showTask() {
        console.log("Current Tasks:", this.tasks);
    }
    getTasks() {
        return this.tasks;
    }
}
