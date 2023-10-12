import React, { useContext } from 'react'
import './TaskComponent.css'
import CategoreyComponent from './CategoreyComponent'
import EditIcon from '@mui/icons-material/Edit';
import { DBContext } from '../App';

const TaskComponent = ({id, title, description, date, choice, SetSpecific_Category}) => {
    const theme = useContext(DBContext);
    //const [DBUpdate, SetDBUpdate] = useContext(DBContext)
    const deleteTask = () => {
        const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

        if (id >= 0 && id < taskList.length) {

          taskList.splice(id, 1);

          localStorage.setItem('taskList', JSON.stringify(taskList));
          
          theme.SetDBUpdate(!theme.DBUpdate);
          console.log(theme)
        }
      };      
  return (
    <div className='TaskComponent_div'>
        <div className='options'><EditIcon style={{height:'20px'}}/></div>
        <div className='Task_Top'>
            <div className='Task_title_div'>
                <p className='Task_Title'>Title:</p>
                <p className='Task_Title'>{title}</p>
            </div>
            <div className='Task_title_div'>
                <p>Deadline:</p>
                <p>{date}</p>
            </div>
        </div>
        <div className='Description'>
            <p>Description:</p>
            <p>{description}</p>
        </div>
        <div className='Tags_Name_div'>
            <div className='Tags_Name'>
            <p>Tags:</p>
            <CategoreyComponent SetSpecific_Category={SetSpecific_Category} text={choice} color="#61677A"/>
            </div>
            <button onClick={deleteTask}>Delete</button>
        </div>
    </div>
  )
}

export default TaskComponent