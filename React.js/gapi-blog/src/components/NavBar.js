import CreateNewBlog from "./CreateNewBlog"

const Navbar = () => {
  return (
    <nav className = "navbar flex flex-wrap">
      <h1 className="font-bold text-2xl"> Gapi blog</h1>
      <div className="links">
        <a href="/" className="bg-slate-300 rounded-md hover:bg-slate-100  hover:border-b-2 hover:border-slate-300 hover:drop-shadow-md">Home</a>
        <a href="/create" className="bg-slate-300 rounded-md hover:bg-slate-100 ml-2 hover:border-b-2 hover:border-slate-300 hover:drop-shadow-md">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;