"use strict";
class Todo {
    constructor(id, content) {
        this.status = false;
        this.id = id;
        this.content = content;
        this.status = this.status;
    }
    getId() {
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
}
let index = 0;
class TodoListManager {
    constructor() {
        this.todos = [];
    }
    addTodo(content) {
        index++;
        let add = new Todo(index, content);
        this.todos.push(add);
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
    }
    updateTodo(index, content) {
        this.todos[index].content = content;
    }
    sortTodo() {
        console.log("Sắp xếp danh sách theo bảng chữ cái");
        this.todos.sort((a, b) => a.content.localeCompare(b.content));
        for (let todo of this.todos) {
            console.log(todo);
        }
    }
    findTodo(content) {
        let check = false;
        for (let todo of this.todos) {
            if (todo.content === content) {
                console.log(todo);
                check = true;
                break;
            }
        }
        if (check === false) {
            console.log("Không tìm thấy");
        }
    }
    listTodo() {
        for (let todo of this.todos) {
            console.log(todo);
        }
    }
}
function main() {
    const todoListManager = new TodoListManager();
    while (true) {
        console.log('1. In danh sách công việc');
        console.log('2. Thêm công việc');
        console.log('3. Xóa công việc');
        console.log('4. Sửa công việc');
        console.log('5. Sắp xếp công việc');
        console.log('6. Tìm kiếm công việc');
        console.log('7. Thoát');
        const choice = prompt('Chọn chức năng:');
        switch (choice) {
            case '1':
                todoListManager.listTodo();
                break;
            case '2':
                const content = String(prompt('Nhập nội dung công việc:'));
                todoListManager.addTodo(content);
                return;
            default:
                console.log('Lựa chọn không hợp lệ.');
        }
    }
}
main();
