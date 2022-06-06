const Navbar = () => {
  return (
    <nav className = "navbar">
      <h1 class="font-bold text-2xl"> Gapi blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;