import { Employee } from "./Employee";

export class Manager extends Employee{
    private _department: string; 

    constructor(id:number, name:string, role:string, department:string){
        super(id ,name, role)
        this._department=department

    }

    getDepartment(): string{
        return this._department
    }
}