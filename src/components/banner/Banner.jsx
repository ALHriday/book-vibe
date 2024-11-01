
const Banner = () => {
    return (
        <div className="w-11/12 h-80 mx-auto mt-2 grid grid-cols-2 justify-center items-center bg-slate-300 rounded-md">
            <div className="flex flex-col justify-center items-center ml-8">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>
                    <div className="">
                        <button className="px-4 py-2 bg-green-500 rounded-md text-white">View The List</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-40">
                    <img className="" src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;