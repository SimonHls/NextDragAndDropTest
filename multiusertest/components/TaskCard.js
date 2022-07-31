import React, { useState } from 'react'

function TaskCard(props) {

  const [dragging, setDragging] = useState(false); 

  const dragStarted = (e, id) => {
    console.log("drag has started");
    e.dataTransfer.setData("cardId", id);
    setDragging(true);
  }

  return (
    <div draggable onDragStart={(e) => {dragStarted(e, props.id)}} 
      className='p-4 text-black w-full h-36 bg-white text-center shadow-md rounded-sm
                hover:shadow-xl transition ease-in
                cursor-drag' >
        <h1 className='text-2xl font-light'>TaskCard {props.id}</h1>
    </div>
  )
}

export default TaskCard