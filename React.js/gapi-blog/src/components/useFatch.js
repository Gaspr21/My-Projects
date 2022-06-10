import { useEffect, useState } from "react";


const useFatch = (url) =>{
  const [data,setData] =useState(null);
  const [isPending,setIsPending] = useState(true);
  const [error,SetError] = useState(null)
  
  useEffect(()=> {
    setTimeout(()=>{
      fetch(url)
      // this function returns a response object
        .then(responseObject => {
          if(!responseObject.ok){
            throw Error('Could not fatch data for that resource!')
          }
          return responseObject.json();
        })
        .then((data)=> {
          setData(data)
          setIsPending(false);
          SetError(null)
        })
        .catch(err => {
          SetError(err.message);
          setIsPending(false);
          console.log(err.message);
        })
      },1000);
  },[url])
  return {data,isPending,error}
}

export default useFatch;