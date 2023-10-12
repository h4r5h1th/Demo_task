import React, { useContext, useState } from 'react'
import './NewTask.css'
import { DBContext } from '../App';
const NewTask = ({SetNewTask}) => {
    const [Title, SetTitle] = useState('');
    const [Description, SetDescription] = useState('');
    const [formDate, SetFormDate] = useState('');
    const [CategoryChoice, SetCategoryChoice] = useState('Fun');
    //const [DBUpdate, SetDBUpdate] = useContext(DBContext);
    const theme = useContext(DBContext);
    function Set_title(e){
        SetTitle(e.target.value);
    }

    function Set_Description(e){
        SetDescription(e.target.value);
    }

    function Set_Form_Date(e){
        SetFormDate(e.target.value);
    }

    function Set_Category_Choice(e){
        SetCategoryChoice(e.target.value);
    }

    function Create_Task(e) {
        e.preventDefault();
    
        const taskData = {
            Title: JSON.stringify(Title),
            Description: JSON.stringify(Description),
            Date: JSON.stringify(formDate),
            Choice: JSON.stringify(CategoryChoice),
            status: false,
        };
    
        const existingTasks = JSON.parse(localStorage.getItem('taskList')) || [];
    
        existingTasks.push(taskData);

        localStorage.setItem('taskList', JSON.stringify(existingTasks));

        theme.SetDBUpdate(!theme.DBUpdate);
    
        SetNewTask(false);
    }
    

    function CloseNewTask(){
        SetNewTask(false);
    }
  return (
    <div className='NewTask_div'>
        <form className='NewTask_Main_div' onSubmit={Create_Task}>
            <div className='close_NewTask' onClick={CloseNewTask}>
                <h1>X</h1>
            </div>
            <p>Title:</p>
            <input type='text' value={Title} onChange={Set_title} required={true}></input>
            <p>Description:</p>
            <input className='Desc_input' type='text' value={Description} onChange={Set_Description} required={true}></input>
            <p>Deadline:</p>
            <input type='date' value={formDate} onChange={Set_Form_Date} required={true}></input>
            <p>Category:</p>
            <select value={CategoryChoice} onChange={Set_Category_Choice}>
                <option value="Fun">Fun</option>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Rest">Rest</option>
                <option value="Health">Health</option>
            </select>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default NewTask