import type { NextPage } from 'next'
import { DragEvent } from 'react';
import TaskCard from "../components/TaskCard"


const Home: NextPage = () => {

  const draggingOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("draggingOver!!!")
  }

  const dropped = (e: DragEvent<HTMLDivElement>) => {
    console.log("you have dropped");
    let transferredCardId = e.dataTransfer.getData("cardId");
    console.log( "card ID " + transferredCardId + " has been transferred")
  }

  return (
  <>
    <div className='m-4 grid grid-cols-2 gap-4'>
      <div className='bg-green-400 min-h-screen min-w-full rounded-sm p-4 shadow-lg'>
        <div className='bg-green-200 p-3 text-center rounded-sm shadow-lg'>
          <h1 className=' text-3xl text-black font-bold pb-2'> COLUMN 1 </h1>
        </div>
        <div className='bg-green-200 w-full min-h-screen mt-4 p-4 rounded-sm shadow-lg'>
          <TaskCard id={1}/>
        </div>
      </div>

      <div className=' bg-fuchsia-600 min-h-screen min-w-full  rounded-sm p-4 shadow-lg'>
        <div className=' p-3 bg-fuchsia-400 text-center rounded-sm shadow-lg'>
          <h1 className=' text-3xl text-black font-bold pb-2'> COLUMN 2 </h1>
        </div>
        <div className='bg-fuchsia-400 w-full min-h-screen mt-4 p-4 rounded-sm hadow-lg'
            onDragOver={(e) => draggingOver(e)} onDrop={(e) => dropped(e)}>
          <TaskCard id={2}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
