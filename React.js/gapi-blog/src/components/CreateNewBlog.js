import { useState } from "react";
import blogs from "../Data/db.json"

function CreateNewBlog(props) {

  const [titleOfTheBlog, setTitleOfTheBlog] = useState('');
  const [bodyOfTheBlog, setBodyOfTheBlog] = useState('');
  const [dateOfTheBlog, setDateOfTheBlog] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('title ', titleOfTheBlog);
    console.log('body/paragraph ', bodyOfTheBlog);
    console.log('date ', dateOfTheBlog);

    //on submit expand json database 
    const newJsonObject = [...blogs, {
      "title": titleOfTheBlog,
      "body": bodyOfTheBlog,
      "date": dateOfTheBlog,
      "id": props.blogs.id
    }
    ]

    // clear all input values in the form
    setTitleOfTheBlog('');
    setBodyOfTheBlog('');
    setDateOfTheBlog('');
    // 
  }
  console.log(blogs)
  const changeState = (prevState, watendState) => {
    var changeableValue = ""
    changeableValue = watendState
    return (changeableValue)
  }


  return (
    <form onSubmit={event => { handleSubmit(event) }} className="">
      <div className="flex justify-center">
        <div className="mb-3 w-full border-2 p-2 grid gap-y-2">
          <input
            className=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none py-1"
            placeholder=" Title"
            name='choreDesc'
            type='text'
            onChange={event => setTitleOfTheBlog(event.target.value)}
            value={titleOfTheBlog} />
          {/* TEXT AREA */}
          <textarea
            className=" form-control block w-full  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder=" Blog body">
          </textarea>
          {/* SUBMIT DOESNT WORK ATM */}
          <button
            className='submitButton bg-slate-100 px-2 rounded-md border-2 w-min '
            type='submit'
            value='Log Chore'>
            Submit
          </button>
        </div>
      </div>
      <br />
    </form>
  )
}


// function CreateNewJsonObject
export default CreateNewBlog;