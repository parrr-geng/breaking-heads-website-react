import Navbar from "../components/Navbar";

function Aboutus(){
    return(
        <div className="h-screen flex flex-col justify-between">
            <div className="grow px-2 grid grid-cols-3">
                <div className="col-span-1 text-left border-r border-black">
                    <Navbar />
                </div>
                <div className="col-span-2">
                    <h2>About Us</h2>

                </div>
            </div>

            <footer className="p-2 mb-0 flex place-content-between border-t border-black ">
                <h1 className="font-bold text-2xl"><a href="/">Breaking Heads</a></h1>
                <div>
                    <a href="/aboutus">About Us</a>
                </div>
            </footer>
        </div>
    )
}

export default Aboutus;