// Ini adalah Class
class Book{
    // Ini adalah Properties / Attributes
    title: string;
    pages: number;
    author: string;
    type: string;
    stock: number;

    // Ini adalah parameter dari class book
    constructor(
        title: string,
        pages: number,
        author: string,
        type: string,
        stock: number
    ) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }

    //Ini adalah method dari class book
    borrow() {
        if (this.stock === 0) {
            throw new Error("Book is out of stock");
        } 
        this.stock--;
        console.log(
            `Buku "${this.title}" berhasil dipinjam. Stok tersisa: ${this.stock}`
        );
    }

    returnBook() {
        this.stock++;
        console.log(
            `Buku "${this.title}" berhasil dikembalikan. Stok: ${this.stock}`
        );
    }
};

class Member{
    name: string;
    studentId: string;
    private borrowedBooks: Book[];

    constructor(
        name: string,
        studentId: string,
    ) {
        this.name = name;
        this.studentId = studentId;
        this.borrowedBooks = [];
    }

    borrow(book: Book) {
        if (this.borrowedBooks.length >= 3) {
            throw new Error(
                `${this.name} sudah mencapai batas maksimal 3 buku!`
            );
        }

        book.borrow();
        this.borrowedBooks.push(book);

        console.log(`${this.name} meminjam buku "${book.title}".`);
    }

    returnBook(book: Book) {
        const index = this.borrowedBooks.indexOf(book);

        if (index === -1) {
            throw new Error(
                `${this.name} tidak meminjam buku "${book.title}".`
            );
        }
        this.borrowedBooks.splice(index, 1);
        book.returnBook();

        console.log(`${this.name} mengembalikan buku "${book.title}"`);
    }
    
}

// 3 Objek book
const book1 = new Book("Negeri 5 Menara", 424, "Ahmad Fuadi", "Fiksi", 5);
const book2 = new Book("Atomic Habits", 525, "James Clear", "Sains", 2);
const book3 = new Book("The Psychology of Money", 262, "Morgan House", "Keuangan & Psikologi", 3);

//Membuat 2 member
const member1 = new Member("Nadrian","2413045")
const member2 = new Member("Nadira","2413049")

console.log("\n=== Peminjaman ===")

//member 1 meminjam 3 buku
member1.borrow(book1);
member1.borrow(book2);
member1.borrow(book3);

//member 2 meminjam 1 buku
member2.borrow(book1);

//Member 1 mengembalikan buku
console.log("\n=== Pengembalian ===");
member1.returnBook(book1);


//new Book {} adalah objek, untuk membuat object baru dari class book
//const novelBook = new Book("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 10);
//const cerpenBook = new Book("Kancil", 40, "Nadrian", "Cerpen", 5);

//Ini adalah
//novelBook.borrow();
//cerpenBook.borrow();