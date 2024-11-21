import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
            <div className="flex justify-center border-b mt-3">
                <div className="flex justify-between items-center w-[1200px]">
                    <Link to={'/'}><img className="h-14" src="src\assets\instagram-text-icon.jpg" alt="" /></Link>
                    <div className="flex gap-12">
                        <Link to={'/requests'} className="text-lg border-b-2 border-b-white py-4 hover:border-b-orange-300">Friend Requests</Link>
                        <Link to={'/about'} className="text-lg border-b-2 border-b-white py-4 hover:border-b-violet-400">About us</Link>
                        <Link to={'/contact'} className="text-lg border-b-2 border-b-white py-4 hover:border-b-red-300">Contact us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;