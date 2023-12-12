import { AiTwotoneAlert } from "react-icons/ai";

export const GetPosts = ()=>{
return <button onClick={()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then((data)=>console.log(data))
    .catch(e=>console.error(e))

}}> Traer datos <AiTwotoneAlert/></button>
}

