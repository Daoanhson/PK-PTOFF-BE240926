class Book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get year(): number {
        return this._year;
    }
}

class LibraryManager {
    private _books: Book[];

    constructor() {
        this._books = [];
    }

    addBook(title: string, author: string, year: number): void {
        const id = this._books.length > 0 ? this._books[this._books.length - 1].id + 1 : 1;
        const newBook = new Book(id, title, author, year);
        this._books.push(newBook);
        console.log("Sách đã được thêm vào thư viện.");
    }

    listBooks(): void {
        if (this._books.length === 0) {
            console.log("Ko có sach trong thu viện.");
        } else {
            console.log("List book:");
            this._books.forEach(book => {
                console.log(`${book.id}. Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
            });
        }
    }

    removeBook(id: number): void {
        const index = this._books.findIndex(book => book.id === id);
        if (index !== -1) {
            this._books.splice(index, 1);
            console.log("Đã xóa sách");
        } else {
            console.log("Ko tìm thấy mã sách");
        }
    }

    searchBook(title: string): void {
        const foundBooks = this._books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Kết quả tìm kiếm:");
            foundBooks.forEach(book => {
                console.log(`${book.id}. Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
            });
        } else {
            console.log("Không tìm thấy sách nào với tên này.");
        }
    }
}

class Main {
    private _libraryManager: LibraryManager;

    constructor(){
        this._libraryManager = new LibraryManager();
    }

    run(): void {
        let check = true;
        let check: boolean = true;
        console.log("======= Menu chức năng =======");
        console.log("1.Cộng hai số");
        console.log("2.Trừ hai số");
        console.log("3.Nhân hai số");
        console.log("4.Chia hai số");
        console.log("5.Dừng chương trình");

        while (check) {
            let input: string = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));

            switch (choice) {
                case "1": {
                    let title = prompt("Title:");
                    let author = prompt("Input author:");
                    let year = Number(prompt("Published:"));
                    if (title && author && !isNaN(year)) {
                        this._libraryManager.addBook(title, author, year);
                    } else {
                        console.log("Thông tin sách không hợp lệ.");
                    }
                    break;
                }
                case "2": {
                    this._libraryManager.listBooks();
                    break;
                }
                case "3": {
                    let id = Number(prompt("Input book code:"));
                    if (!isNaN(id)) {
                        this._libraryManager.removeBook(id);
                    } else {
                        console.log("Mã sách không hợp lệ.");
                    }
                    break;
                }
                case "4": {
                    let title = prompt("Input book title:");
                    if (title) {
                        this._libraryManager.searchBook(title);
                    } else {
                        console.log("Tên sách không hợp lệ.");
                    }
                    break;
                }
                case "5": {
                    check = false;
                    console.log("Cảm ơn đã sử dụng");
                    break;
                }
                default: {
                    console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
                }
            }
        }
    }
}

let app = new Main();
app.run();
