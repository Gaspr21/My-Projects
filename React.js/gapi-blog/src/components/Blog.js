import { NavLink} from "react-router-dom";
function Blog (props){
  const path = "/blog/"+ props.blog.id
  const propsOfBlog = 
    {
    "id":props.blog.id,
    "title":props.blog.title,
    "author":props.blog.author,
    "body":props.blog.body,
    "date":props.blog.date
    }
  
  return (
    <div>
    <NavLink state={{ propertiesOfTheBlog: propsOfBlog }} to={{pathname:path}}>
    <div className="hover:bg-slate-100 px-2 py-1  my-1 border-b-4 rounded-sm border-slate-400 bg-slate-300 hover:border-b-4 hover:border-slate-300 hover:drop-shadow-md" key={props.blog.id}>
      
      <h2 className="blogTitleColor "> {props.blog.title}</h2>

      <div className="flex flex-wrap justify-between">
      <p>Written by {props.blog.author}</p>
      <p className=" text-sm rounded-md w-max h-max text-gray-400 mt-1">{props.blog.date} </p>
      </div>

    </div>
    </NavLink>
    </div>
   );
}


export default Blog;