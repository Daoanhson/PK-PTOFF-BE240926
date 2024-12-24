class CD {
    private static _idCounter = 1;
    private _id: number;
    private _title: string;
    private _artist: string;
    private _year: number;

    constructor(title: string, artist: string, year: number) {
        this._id = CD._idCounter++;
        this._title = title;
        this._artist = artist;
        this._year = year;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (!value.trim()) {
            throw new Error("Tên CD không được để trống.");
        }
        this._title = value;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(value: string) {
        if (!value.trim()) {
            throw new Error("Nghệ sĩ không được để trống.");
        }
        this._artist = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        if (value < 1900 || value > new Date().getFullYear()) {
            throw new Error("Năm phát hành không hợp lệ.");
        }
        this._year = value;
    }
}

class CDStoreManager {
    private _cds: CD[];

    constructor() {
        this._cds = [];
    }

    addCD(title: string, artist: string, year: number): void {
        const newCD = new CD(title, artist, year);
    }

    listCDs(): void {

    }

    removeCD(id: number): void {
    
    }

    searchCD(title: string): void {
}
}

class Main {
    private _cdStoreManager: CDStoreManager;

    constructor() {
        this._cdStoreManager = new CDStoreManager();
    }

    run(): void {
        let running = true;

        
    }
}

