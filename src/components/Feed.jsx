import { Link } from "react-router-dom";

function Feed({img,id}){
    return(
        <>
            <Link to={`/posts/${id}`}>
                <img src={img} className="h-[290px] w-[290px] object-cover" alt="" />
            </Link>
        </>
    )
}

export default Feed;