import CreateNewBlog from "./NewBlog"

const Navbar = () => {
  return (
    <nav className = "navbar">
      <h1 className="font-bold text-2xl"> Gapi blog</h1>
      <div className="links">
        <a href="/" onClick={CreateNewBlog}>Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;