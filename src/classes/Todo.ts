export class Todo {
    private tasks: { task: string, status: string }[] = [];
    private isComplete: boolean = false;

    addTask(task: string, status: string) {
        this.tasks.push({ task, status });
    }

    showTask(): void {
        console.log("Current Tasks:", this.tasks);
    }
    getTasks() {
        return this.tasks
    }
}