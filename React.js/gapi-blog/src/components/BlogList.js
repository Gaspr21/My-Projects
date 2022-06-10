import Blog from "./Blog";

const BlogList = (props) => {
  return ( 
    <div className="blog-list">
      <h2 className="border-b-2 border-gray-200"> All blogs</h2>
      {props.blogs.map((blog)=>(<Blog key={blog.id} blog={blog}/>))}

    </div>
   );
}
export default BlogList;