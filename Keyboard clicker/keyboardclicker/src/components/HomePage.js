import ToggleSwitch from './Assets/ToggleSwitch'
import React from "react"

const HomePage = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="h-screen md:h-screen bg-slate-900 w-3/4 col-span-1 border-t-2 border-white">
        <div>
          <div className='flex justify-center'>
            <p className="w-max text-gray-400 px-2"> Are you ready for some clicking ?</p>
          </div>
        </div>
        <div className='flex justify-center'>

          <div className='flex h-screen justify-center items-center'>
              <button className='text-9xl text-center bg-blue-400 border-2 border-white rounded-xl w-48 h-48 mb-20'> Q </button>
          </div>

        </div>
      </div> 

      <div className="w-1/4 bg-gray-800 border-2">
        {/* <div className='mt-2 ml-2 w-96 border-2 h-56 overflow-scroll overflow-x-hidden scroll-smooth scroll-mt-1 snap-y overflow-y-hidden'> */}
        <div className='bg-slate-300 m-2'>
          <div className="grid gap-y-4 mt-5 ml-2 w-96 h-56 overflow-scroll overflow-x-hidden scroll-smooth snap-y snap-center" >
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400 mt-2">
              <button>this is one </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400">
              <button>this is two </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400">
              <button>this is three </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400">
              <button>this is four </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400">
              <button>this is five </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400">
              <button>this is six </button>
            </div>
            <div className="bg-slate-400 text-white w-max px-2 py-4 hover:bg-cyan-400 mb-2">
              <button>this is seven </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;