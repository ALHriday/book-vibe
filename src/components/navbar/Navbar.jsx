import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center py-2">
            <h1 className="text-2xl font-bold">Book Vibes</h1>
            <nav className="flex gap-2">
                <Link to='/' className="px-4 py-2 rounded-md bg-slate-200">Home</Link>
                <Link to='/' className="px-4 py-2 rounded-md bg-slate-200">Listed Books</Link>
                <Link to='/' className="px-4 py-2 rounded-md bg-slate-200">Pages To Read</Link>
            </nav>
            <div className="flex gap-2 text-white">
                <button className="px-4 py-2 rounded-md bg-green-500">Sign Up</button>
                <button className="px-4 py-2 rounded-md bg-teal-400">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;