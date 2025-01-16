import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-slate-900 flex items-center flex-col'>
        <div className='w-[30%] text-white h-[5%] text-center rounded-lg text-4xl mt-4 font-bold'>
            PDF Merger
        </div>
        <div className='text-white text-2xl mt-4'>
            <p>This is Free pdf merger tool to merge any two pdfs...</p>
        </div>
        <div className='mt-[10%]'>
          <form action="http://localhost:3000/merge" method="post" encType='multipart/form-data'  className='flex flex-col border-2 rounded-xl p-6 items-center'>
            <input type="file" name="pdfs" id="pdfs" multiple className='text-white text-2xl ml-3'/>
            <input type ="submit" className='text-white m-8 border-solid border-orange-600 border-2 w-[50%] rounded-lg text-2xl cursor-pointer hover:bg-orange-500' />
          </form>
          
        </div>
      </div> 
    </>
  )
}

export default App
