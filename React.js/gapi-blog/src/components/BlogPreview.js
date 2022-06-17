import {useLocation } from "react-router-dom";


function BlogPreviw(){
  const location = useLocation()
  const {propertiesOfTheBlog} = location.state
  return ( 
    <div className="border-2 border-slate-100 drop-shadow-md px-4 ">
      <div className=" mb-4">
        <div className="flex justify-between">
      <h2 className="blogTitleColor">{propertiesOfTheBlog.title}</h2>
      <div className="mt-3 text-slate-400">Posted {propertiesOfTheBlog.date}</div>
        </div>
      <h1 className=" text-slate-400">Written by {propertiesOfTheBlog.author}</h1>
      </div>
      <div>{propertiesOfTheBlog.body}</div>
    </div>
   );
}

export default BlogPreviw;