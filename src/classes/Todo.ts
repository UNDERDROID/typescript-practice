export class Todo {
    private tasks: string[] = [];
    private isComplete: boolean = false;

    addTask(text: string) {
        this.tasks.push(text);
    }

    showTask(): void {
        console.log("Current Tasks:", this.tasks);
    }
    getTasks(): string[] {
        return this.tasks
    }
}