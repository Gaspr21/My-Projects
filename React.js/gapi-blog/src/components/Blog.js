import { NavLink ,useLocation } from "react-router-dom";
import BlogPreviw from "./BlogPreview";

function Blog (props){
  const path = "/blog/"+ props.blog.id
  const propsOfBlog = 
    {
    "id":props.blog.id,
    "title":props.blog.title,
    "author":props.blog.author,
    "body":props.blog.body
    }
  
  return (
    <div className="hover:bg-slate-200 px-2 border-b-2 border-gray-100" key={props.blog.id}>
      <h2 className="blogTitleColor"> {props.blog.title}</h2>
      <p>Written by {props.blog.author}</p>
      <div>
          <NavLink state={{ propertiesOfTheBlog: propsOfBlog }} className="changenamebutton transition ease-in-out delay-100 hover:bg-blue-600 hover:scale-110" 
          to={{
            pathname:path,
            aboutProps:
            {
              selectedidds:propsOfBlog.id
            }
          }}
        >Blog preview
        </NavLink>
      </div>
    </div>
   );
}
 

export default Blog;