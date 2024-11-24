import { useState } from 'react'
 
function App() {
 const [color, setColor] = useState("white")

  return (
    <>
        <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl' 
              onClick={(e)=>{
                console.log(e.target.value)
                setColor(e.target.value);
              }}>

                    <button className='outline-none px-4 bg py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} value="red">Red</button>

                    <button className='outline-none px-4 bg py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} value="green" >Green</button>

                    <button className='outline-none px-4 bg py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} value="blue">Blue</button>

                    <button className='outline-none px-4 bg py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} value="pink">Pink</button>
                    
                    <button className='outline-none px-4 bg py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} value="black">black</button>

                   
              </div>
            </div>
        </div>
    </>
  )
}

export default App
