import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from '../AddToDB'


const BookDetails = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    const { bookName, image, author, rating, category, tags } = book;

    const markAsRead = (id) => {
        console.log(id);
        addToStoredReadList(id);
    }


    return (
        <div className="w-11/12 mx-auto grid grid-cols-5 border-2 mt-6 rounded-md">

            <div className="h-60 p-4 col-span-2 bg-slate-200 flex justify-center items-center">
                    <img className="h-full" src={image} alt="" />
            </div>
            <div className="flex flex-col col-span-3 gap-2 p-4">
                
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
                <div className="flex gap-2">
                    <button onClick={() => markAsRead(id)} className="px-4 py-2 rounded-md bg-green-300">Mark As Read</button>
                    <button className="px-4 py-2 rounded-md bg-green-300">Wish List</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;