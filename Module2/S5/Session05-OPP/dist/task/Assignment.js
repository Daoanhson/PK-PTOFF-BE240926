"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
    getAssignmentDetails() {
        return `Employee: ${this._employee.getName()}, Task: ${this._task.getDetails()}`;
    }
}
exports.Assignment = Assignment;
