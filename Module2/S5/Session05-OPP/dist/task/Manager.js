"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor(id, name, role, department) {
        super(id, name, role);
        this._department = department;
    }
    getDepartment() {
        return this._department;
    }
}
exports.Manager = Manager;
