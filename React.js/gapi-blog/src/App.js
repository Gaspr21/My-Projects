import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import CreateNewBlog from "./components/CreateNewBlog"
import BlogPreviw from './components/BlogPreview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/blog/:id" exact element={<BlogPreviw/>}></Route>
            <Route path="/create" exact element={<CreateNewBlog/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
