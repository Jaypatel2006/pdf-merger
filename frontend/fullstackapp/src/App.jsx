import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[100%] h-[100%] bg-slate-900 flex items-center flex-col'>
        <div className='w-[30%] text-white h-[5%] text-center rounded-lg text-4xl mt-4 font-bold'>
            JP Tools
        </div>
        <div className='text-white text-2xl mt-4'>
            <p>"Empower Your Documents, Free!"</p>
        </div>
        <div className='mt-[5%] border-2 rounded-xl'>
          <h1 className='text-white text-3xl m-2 text-center font-extrabold'>PDF Merger</h1>
          <form action="http://localhost:3000/merge" method="post" encType='multipart/form-data'  className='flex flex-col  p-6 items-center'>
            <input type="file" name="pdfs" id="pdfs" multiple className='text-white text-2xl ml-3'/>
            <input type ="submit" className='text-white m-8 border-solid border-orange-600 border-2 w-[50%] rounded-lg text-2xl cursor-pointer hover:bg-orange-500' />
          </form>
          
        </div>

        <div className='mt-[5%] border-2 rounded-xl'>
          <h1 className='text-white text-3xl m-4 text-center font-extrabold'>DOCX to PDF Converter</h1>
          <form action="http://localhost:3000/convert" method="post" encType='multipart/form-data'  className='flex flex-col  p-6 items-center'>
            <input type="file" name="docx" id="pdfs" multiple className='text-white text-2xl ml-3'/>
            <input type ="submit" className='text-white m-8 border-solid border-orange-600 border-2 w-[50%] rounded-lg text-2xl cursor-pointer hover:bg-orange-500' />
          </form>
          
        </div>

      </div> 
    </>
  )
}

export default App
