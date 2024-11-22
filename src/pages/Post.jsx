import { useParams } from "react-router-dom";
import users from "../components/Users";

const options = {
    day: 'numeric',
    month: 'long',
  };

function Post(){
    let {id} = useParams()
    let details = null
    let user = null
    for(let i=0;i<users.length;i++){
        details = users[i].posts.find(user=>user.id == id)
        if(details){
            user = users[i]
            break;
        }
    }
    console.log(details)

    return(
        <>
            <div className="rounded-xl w-[450px] mx-auto mt-10">
                <div className="flex gap-3 items-center mb-3">
                    <img src={user.image} className="h-16 w-16 border border-black rounded-full object-cover" alt="" />
                    <div className="">
                        <h1 className="text-lg font-semibold">{user.name}</h1>
                        <p className="text-gray-500">@{user.username}</p>
                    </div>
                </div>
                <img src={details.postImage} className="w-[450px] h-[400px] rounded-xl object-cover" alt="" />
                <div className="p-1">
                    <div className="mt-3 flex justify-between">
                        <div className="flex gap-24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/></svg>
                    </div>
                    <h1 className="font-bold mt-2">{details.likes} Likes</h1>
                    <h1 className="mt-2"><span className="font-bold">{user.username} </span>{details.caption}</h1>
                    <h1 className="mt-1 font-semibold text-gray-600">{new Date(details.postedAt).toLocaleDateString('en',options)}</h1>
                </div>
                
            </div>
        </>
    )
}

export default Post;