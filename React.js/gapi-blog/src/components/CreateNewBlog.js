import { useState } from "react";
import blogs from "../Data/db.json"
import Moment from "moment"


function CreateNewBlog(props) {

  const [titleOfTheBlog, setTitleOfTheBlog] = useState('');
  const [bodyOfTheBlog, setBodyOfTheBlog] = useState('');
  const [authorOfTheBlog, setAuthorOfTheBlog] = useState('Anonymous');
  const [dateOfTheBlog, setDateOfTheBlog] = useState(Moment().format('YYYY-MM-DD'));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('title ', titleOfTheBlog);
    console.log('body/paragraph ', bodyOfTheBlog);
    console.log('date ', dateOfTheBlog);



    console.log(blogs, 'length of blogs');

    handlePostRequest()

    setTitleOfTheBlog('')
    setBodyOfTheBlog('')
    setAuthorOfTheBlog('')
  }

  const handlePostRequest = () => {

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleOfTheBlog,
        body: bodyOfTheBlog,
        date: dateOfTheBlog,
        author: authorOfTheBlog,
        comments: [{}]
      })
    })
      .then(response => console.log(response.json()))
      .catch(data => console.log(data));


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
            {/* Title of the blog */}
            <input
              className=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none py-1"
              placeholder=" Title"
              name='choreDesc'
              type='text'
              onChange={event => setTitleOfTheBlog(() => {
                console.log(event.target.value)
                return event.target.value
              })}
              value={titleOfTheBlog} />
            {/* TEXT AREA */}
            <textarea
              className=" form-control block w-full  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={event => setBodyOfTheBlog(() => {
                console.log(event.target.value)
                return event.target.value
              })}
              placeholder=" Blog body"
              value={bodyOfTheBlog}>
            </textarea>
            <input
              className=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none py-1"
              placeholder=" OPTIONAL: Insert author name"
              name='choreDesc'
              type='text'
              onChange={event => setAuthorOfTheBlog(() => {
                console.log(event.target.value)
                return event.target.value
              })}
              value={authorOfTheBlog} />
            {/* Submit the blog to the Home screen*/}
            <button
              className='submitButton bg-slate-100 px-2 rounded-md border-2 w-min '
              type='submit'
              value='Log Chore'>
              Submit
            </button>
          </div>
        </div>
      </form>
)}

// {/*  function CreateNewJsonObject */}
export default CreateNewBlog;