import { Person } from "./Person";

export class Employee extends Person {

    private _role:string;

    constructor(id:number,name: string,role: string){
        super(id,name);
        this._role=role;
    }
    override getName(): string {
        return "";
    }

    getRole():string{
        return this._role;
    }

}