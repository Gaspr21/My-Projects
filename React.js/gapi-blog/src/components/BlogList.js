import Blog from "./Blog";

const BlogList = (props) => {
  return ( 
    <div className="blog-list ">
      <h2 className="border-b-2 border-gray-200"> All blogs</h2>
      <div className="bg-slate-50 pt-1">
        <div>
          {props.blogs.map((blog)=>(<Blog key={blog.id} blog={blog}/>)).reverse()}
        </div>
      </div>

    </div>
   );
}
export default BlogList;