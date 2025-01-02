"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(id, name, role) {
        super(id, name);
        this._role = role;
    }
    getName() {
        return "";
    }
    getRole() {
        return this._role;
    }
}
exports.Employee = Employee;
