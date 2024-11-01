import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const {bookId,bookName,image,author,rating,category,tags} = book;
    
    return (
        <Link to={`/books/${bookId}`}>
        <div className="flex flex-col gap-2 p-4 border-2 rounded-md">       
            <div className="h-44 p-4 bg-slate-200 rounded-md flex justify-center items-center">
                <img className="h-24" src={image} alt="" />
            </div>
            <div className="flex gap-2">
                <button className="font-bold text-green-600 px-3 py-1 rounded-full bg-green-100">{tags[0]}</button>
                <button className="font-bold text-green-600 px-3 py-1 rounded-full bg-green-100">{tags[1]}</button>
            </div>
            <div className="flex flex-col gap-1 border-b-2 border-dashed py-1">
                <h1 className="text-2xl font-bold">{bookName}</h1>
                <p>{author}</p>
            </div>
            <div className="flex justify-between">
                <h2 className="font-bold">{category}</h2>
                <h2>{rating} <span>Star</span></h2>
            </div>
        </div>
    </Link>
    );
};

export default Book;