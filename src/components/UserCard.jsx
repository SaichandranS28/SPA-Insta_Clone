import { Link } from "react-router-dom";

function UserCard({img,name,username}){
    return(
        <>
            <div className="w-[450px] mx-auto mt-3 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="h-20 w-20 rounded-full object-cover" src={img} alt="image" />
                    <Link to={`/requests/${username}`}>
                        <div className="">
                            <h1 className="text-lg font-semibold">{name}</h1>
                            <p className="text-sm text-gray-500">@{username}</p>
                        </div>
                    </Link>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg" >Follow</button>
                
            </div>
        </> 
    )
}

export default UserCard;