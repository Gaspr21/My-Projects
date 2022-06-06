import {useState, useEffect} from 'react';
import BlogList from "./BlogList";
import useFatch from './useFatch';


const Home = () => {
  
  const {data:blogs,isPending,error} = useFatch('http://localhost:8000/blogs')

  return ( 
    <div className="home" >
      {isPending && <div>Loding...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs"/>}
    </div>
   );
}
 
export default Home;