"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Employee_1 = require("./Employee");
class TaskManager {
    constructor() {
        this._employees = [];
        this._managers = [];
        this._tasks = [];
        this._assignments = [];
        this._employees = [];
        this._managers = [];
        this._tasks = [];
        this._assignments = [];
    }
    addEmployee(name, role) {
        const id = this._employees.length + 1;
        const employee = new Employee_1.Employee(id, name, role);
        this._employees.push(employee);
        console.log(`Employee added: ${id},${name},${role} `);
    }
}
exports.TaskManager = TaskManager;
