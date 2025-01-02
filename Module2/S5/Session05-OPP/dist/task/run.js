"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./TaskManager");
class run {
    constructor() {
        this._taskManager = new TaskManager_1.TaskManager();
    }
    app() {
        let check = true;
        console.log("\nMenu:");
        console.log("1. Add Employee");
        console.log("2. Add Manager");
        console.log("3. Add Task");
        console.log("4. Assign Task to Employee");
        console.log("5. Complete Task");
        console.log("6. List Assignments");
        console.log("7. Exit");
        while (check) {
            let input = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));
            switch (input) {
                case '1':
                    let empName = prompt("Enter employee name: ");
                    let empRole = prompt("Enter employee role: ");
                    if (empName && empRole) {
                        this._taskManager.addEmployee(empName, empRole);
                    }
                    else {
                        console.log("Chương trình ko hợp lệ");
                    }
                    break;
                case '2':
                    break;
                case '3':
                    break;
                case '4':
                    break;
                case '5':
                    break;
                case '6':
                    break;
                case '7':
                    console.log("Exiting program.");
                default:
                    console.log("Invalid option. Please try again.");
            }
        }
    }
}
let main = new run();
main.app;
