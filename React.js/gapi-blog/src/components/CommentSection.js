import {useLocation } from "react-router-dom";
import BlogList from "./BlogList";
import blogs from "../Data/db.json"
import { useState } from "react";



const CommentSection = (props) => {
  // function handleCommentView(){
  //   return(
      
  //   )
  // }
  const location = useLocation()
  const {propertiesOfTheBlog} = location.state
  
  const [bodyOfTheBlog, setBodyOfTheBlog] = useState('');
  const [authorOfTheBlog, setAuthorOfTheBlog] = useState('Anonymous');

  const handlePostRequest = () => {
    const idoftheblog = propertiesOfTheBlog.id
    fetch('http://localhost:8000/blogs/' + propertiesOfTheBlog.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comments:[
        { 
          id: Math.random(),
          body: bodyOfTheBlog,
          author: authorOfTheBlog
        }
        ]
      })
    })
      .then(response => console.log(response.json()))
      .catch(data => console.log(data));
  }
  const handleCommentClick = (event)=>{
    event.preventDefault();
    console.log(event);
    
    handlePostRequest()

    setBodyOfTheBlog('')
    setAuthorOfTheBlog('')
  }
  return ( 
    <div className="bg-slate-50 mt-4 border-2 rounded-md  shadow-md  border-slate-100 drop-shadow-md px-4 ring-1 ring-slate-200">
      <div className="flex justify-between">
      <h2 className="ml-2 text-lg mt-2 border-b-2 mb-2 mr-2 py-1">Comments</h2>
      <button className="deletebtn h-max w-max my-3 mx-1" onClick={()=>handleCommentClick()}>Comment </button>
      </div>
    </div>
   );
}

export default CommentSection;