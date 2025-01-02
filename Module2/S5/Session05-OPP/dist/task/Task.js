"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, deadline) {
        this._id = id;
        this._title = title;
        this._deadline = new Date(deadline);
        this._isCompleted = false;
    }
    complete() {
        this._isCompleted = true;
    }
    getDetails() {
        return `ID: ${this._id}, Title: ${this._title}, Deadline: ${this._deadline.toLocaleDateString()}, Completed: ${this._isCompleted}`;
    }
}
exports.Task = Task;
