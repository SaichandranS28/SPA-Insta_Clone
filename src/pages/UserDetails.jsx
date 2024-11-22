import { useParams } from "react-router-dom";
import users from "../components/Users";
import Feed from "../components/Feed";

function UserDetails(){
    let {username} = useParams()
    let user = users.find(user=>user.username === username)
    return(
        <>
            <div className="w-[700px] mx-auto flex gap-12 items-center mt-14">
                <img className="h-56 w-56 rounded-full object-cover" src={user.image} alt="" />
                <div>
                    <div className="flex gap-4">
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="text-xl text-gray-600">{`(@${user.username})`}</p>
                    </div>    
                    <h2 className="text-xl text-gray-700">{user.profession}</h2>
                    <p className="text-md mt-3">{user.caption}</p>
                    <div className="flex gap-4 mt-5">
                        <h2 className="px-3 py-2 bg-gray-200 rounded-lg text-black font-bold">{user.followers} <span className="font-normal">Followers</span></h2>
                        <h2 className="px-3 py-2 bg-gray-200 rounded-lg text-black font-bold">{user.following} <span className="font-normal">Followings</span></h2>
                    </div>
                </div>
            </div>    

            <div className="w-[1000px] flex flex-wrap gap-2 ml-80 mt-16">
                {
                    user.posts.map(user=> <Feed key={user.id} id={user.id} img={user.postImage}/>)
                }
            </div>        
        </>
    )
}

export default UserDetails;