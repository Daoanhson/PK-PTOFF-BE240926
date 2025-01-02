import { Employee } from "./Employee";
import { Task } from "./Task";

export class Assignment {
    private _employee: Employee
    private _task: Task

    constructor(employee: Employee, task: Task) {
        this._employee = employee
        this._task=task
    }


    getAssignmentDetails(): string {
        return `Employee: ${this._employee.getName()}, Task: ${this._task.getDetails()}`;
    }
    

}
