export class TaskModel {

    constructor(private id: number,
                public name: string, 
                public completed: Date, 
                public description: string,
                public totalSeconds: number,
                public active: boolean) {

    }

    getId(): number {
        return this.id;
    }
    setName(name: string): void {
        this.name = name;
    }

    setLastChecked(completed: Date): void {
        this.completed = completed;
    }

    addToTotalSeconds(totalSeconds: number): void {
        this.totalSeconds += totalSeconds;
    }

    deductFromTotalSeconds(totalSeconds: number): void {
        this.totalSeconds -= totalSeconds;
    }

    setIsActive(active: boolean): void {
        this.active = active;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}