
export class Task {
    private _id:number;
    private _title: string;
    private _deadline: Date;
    private _isCompleted: boolean;

    constructor(id:number, title:string, deadline:Date) {
        this._id = id;
        this._title = title;
        this._deadline = new Date(deadline);
        this._isCompleted = false;
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id=id
    }
    
    complete() {
        this._isCompleted = true;
    }

    
    getDetails() {
        return `ID: ${this._id}, Title: ${this._title}, Deadline: ${this._deadline.toLocaleDateString()}, Completed: ${this._isCompleted}`;
    }

}