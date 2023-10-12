import React, { useState } from 'react'
import './CreateButton.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import NewTask from './NewTask';

const CreateButton = () => {
  const [newTask, SetNewTask] = useState(false);

  function NewTask_Create(){
    SetNewTask(true);
  }
  return (
    <div className='Create_Button_New'>
      <button onClick={NewTask_Create}><AddBoxIcon/></button>
      {newTask?
        <NewTask SetNewTask={SetNewTask}/>:<></>
      }
    </div>
  )
}

export default CreateButton