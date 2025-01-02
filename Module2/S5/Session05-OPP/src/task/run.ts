import { TaskManager } from './TaskManager';
class run{
    private _taskManager:TaskManager
    constructor(){
        this._taskManager = new TaskManager();
    }
app(): void{
    let check: boolean = true;
    console.log("\nMenu:");
    console.log("1. Add Employee");
    console.log("2. Add Manager");
    console.log("3. Add Task");
    console.log("4. Assign Task to Employee");
    console.log("5. Complete Task");
    console.log("6. List Assignments");
while (check) {


    let input: string = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));

    switch (input) {
        case '1':
            let empName = prompt("Enter employee name: ");
            let empRole = prompt("Enter employee role: ");
            if(empName&&empRole){
                this._taskManager.addEmployee(empName,empRole)
            }else{
                console.log("Chương trình ko hợp lệ")
            }
            break;

        case '2':
            const managerName = prompt("Enter manager name: ");
            const managerRole = prompt("Enter manager role: ");
            const department = prompt("Enter department: ");
            if (managerName && managerRole && department) {
                this._taskManager.addManager( managerName,  managerRole, department);
            } else {
                console.log("Invalid input. Please enter name, role, and department.");
            }

            break;
        case '3':
            const title = prompt("Input task title: ");
            const deadline = prompt("Input task deadline: ");
            if (title && deadline) {
                this._taskManager.addTask(title, deadline);
            } else {
                console.log("Invalid input. Please enter both title and deadline.");
            }

            break;
        case '4':
            const employeeId = Number(prompt("Enter employee ID: "));
            const taskId = Number(prompt("Enter task ID: "));
            if (!isNaN(employeeId) && !isNaN(taskId)) {
                this._taskManager.assignTask(employeeId, taskId);
            } else {
                console.log("Invalid.");
            }
            break;

        case '5':
            const completeTaskId = Number(prompt("Enter task ID to complete: "))
            if(!isNaN(completeTaskId)) {
                this._taskManager.completeTask(completeTaskId)
            } else {
                console.log("Invalid input. Please enter a task ID again!")
            }
            break;
        case '6':
            this._taskManager.listAssignments;
            break;
        
        default:
            console.log("Invalid option. Please try again.");
    }
}
}

}
let main = new run()
main.app