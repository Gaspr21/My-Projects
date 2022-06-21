import {useLocation } from "react-router-dom";
import CommentSection from "./CommentSection"

function BlogPreviw(){
  const location = useLocation()
  const {propertiesOfTheBlog} = location.state
  return ( 
    <div>
      <div className="border-2 border-slate-100 drop-shadow-md px-4 ring-1 ring-slate-200 rounded-md shadow-lg">
        <div className=" mb-4">
          <div className="flex justify-between">
        <h2 className="blogTitleColor">{propertiesOfTheBlog.title}</h2>
        <div className="mt-3 text-slate-400">{propertiesOfTheBlog.date}</div>
          </div>
        <h1 className=" text-slate-400">Written by {propertiesOfTheBlog.author}</h1>
        </div>
        <div className="mb-2">{propertiesOfTheBlog.body}</div>
      </div>
        <CommentSection props={propertiesOfTheBlog}/>
    </div>
   );
}

export default BlogPreviw;