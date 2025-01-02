import { Assignment } from "./Assignment";
import { Employee } from "./Employee";
import { Manager } from "./Manager";
import { Task } from "./Task";

export class TaskManager {
    private _employees: Employee[]=[]
    private _managers: Manager[]=[]
    private _tasks: Task[]=[]
    private _assignments: Assignment[]=[]
    constructor() {
        this._employees = [];
        this._managers = [];
        this._tasks = [];
        this._assignments = [];
    }
    addEmployee(name: string, role: string): void {
        const id = this._employees.length + 1;
        const employee = new Employee(id, name, role);
        this._employees.push(employee);
        console.log(`Employee added: ${id},${name},${role} `);
    }

    addManager(name: string, role:string, department:string):void {
        const id = this._managers.length + 1;
        const manager = new Manager(id, name, role, department);
        this._managers.push(manager);
        console.log(`Manager added: ${name}`);
    }

    addTask(title: string, deadline: string): void {
        const id = this._tasks.length + 1;
        const task = new Task(id, title, new Date(deadline));
        this._tasks.push(task);
        console.log(`Task added: ${title}, Deadline: ${deadline}`);
    }

    assignTask(employeeId: number, taskId: number): void {
        // get id from employee class
        const employee = this._employees.find(e => e.id === employeeId);
        const task = this._tasks.find(t => t.id === taskId);

        if (!employee || !task) {
            console.log("Invalid employee ID or task ID.");
            return;
        }

        const assignment = new Assignment(employee, task);
        this._assignments.push(assignment);
        console.log(`Assigned task "${task.getDetails}" to ${employee.getName()}.`);

    }

    completeTask(taskId: number): void {
        const task = this._tasks.find(t => t.id === taskId);
        if (task) {
            task.complete()
            console.log(`Task ${task.getDetails}`)
        } else {
            console.log("Task not found")
        }

    }

    listAssignments(): void {
        console.log("List assignments: ")
        this._assignments.forEach((a)=>{
            console.log(a.getAssignmentDetails())

        })

    }


}

