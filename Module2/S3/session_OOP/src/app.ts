class Todo{
    public id: number;
    public content: string;
    private  status: boolean = false;


    // Khởi tạo constructor
    constructor(id: number, content: string){
        this.id = id;
        this.content = content;
        this.status = this.status;
    }
// Setter Getter
    
    public getId() {

    }

    public setContent(content: string){
    this.content = content;
}

    public getContent(){
    return this.content;
}
    public setStatus(status: boolean){
        this.status = status;
    }

    public getStatus(){
        return this.status;
    }
}
let index: number = 0;
class TodoListManager {
    private todos: Todo[] = [];

    public addTodo(content: string){
        index ++;
        let add: Todo = new Todo(index,content);
        this.todos.push(add);
    }

    public removeTodo(index: number){
        this.todos.splice(index,1);
    }

    public updateTodo(index: number, content: string){
        this.todos[index].content = content;
    }

    public sortTodo(){
        console.log("Sắp xếp danh sách theo bảng chữ cái")
        this.todos.sort((a,b) => a.content.localeCompare(b.content));
        for(let todo of this.todos){
            console.log(todo);
        }
    }

    public findTodo(content: string){
        let check: boolean = false;
        for(let todo of this.todos){
            if(todo.content === content){
                console.log(todo);
                check = true;
                break;
            }
        }
        if(check === false){
            console.log("Không tìm thấy");
        }
    }

    public listTodo(){
        for(let todo of this.todos){
            console.log(todo);
        }
    }
    

}

function main() {
    const todoListManager = new TodoListManager();
  
    while (true) {
      // Hiển thị menu
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
        return

        default:
          console.log('Lựa chọn không hợp lệ.');
      }
    }
  }
  
  main();