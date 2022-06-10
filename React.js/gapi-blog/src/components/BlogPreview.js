import {useLocation } from "react-router-dom";


function BlogPreviw(){
  const location = useLocation()
  const {propertiesOfTheBlog} = location.state
  return ( 
    <div className="border-y border-slate-100 drop-shadow-md px-4 ">
      <div className=" mb-4">
      <h2>{propertiesOfTheBlog.title}</h2>
      <h1>Written by {propertiesOfTheBlog.author}</h1>
      </div>
      <div>{propertiesOfTheBlog.body}</div>
    </div>
   );
}

export default BlogPreviw;