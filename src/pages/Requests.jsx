import UserCard from "../components/UserCard";
import users from "../components/Users";

function Requests(){

    return(
        <>
         <div className="w-[450px] mx-auto mt-16 mb-8">
            <h1 className="text-2xl font-semibold">Your Friend Requests...</h1>
            <p className="text-gray-800">You can manage your friend requests here.</p>
         </div>
        
        {
            users.map(user=><UserCard key={user.id_no} img={user.image} name={user.name} username={user.username}/>)
        }
        </>
    )
}

export default Requests;