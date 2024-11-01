import { useEffect, useState } from "react";
import Book from "../book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    },[])
    return (
        <div className="w-11/12 mx-auto py-8">
            <div className="py-6">
                <h1 className="text-4xl font-bold text-center">Books</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
                {books.map(book => <Book key={book.bookId} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;