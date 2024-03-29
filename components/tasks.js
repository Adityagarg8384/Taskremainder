import React from 'react'
import Task from './task'

const Tasks = ({tasks, ondelete, ontoggle}) => {
    // console.log(tasks);
  return (
    <>
    {tasks.map((task)=>(
        <Task key={task.id} task={task} ondelete={ondelete} ontoggle= {ontoggle}/>
    ))}
    </>
  )
}

export default Tasks