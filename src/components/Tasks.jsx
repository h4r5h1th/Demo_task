import React, { useContext, useEffect, useState } from 'react';
import './Tasks.css';
import TaskComponent from './TaskComponent';
import { DBContext } from '../App';

const Tasks = ({ Specific_Category, SetSpecific_Category}) => {
  const [taskList, setTaskList] = useState([]);
  //const [DBUpdate, SetDBUpdate] = useContext(DBContext);
  const theme = useContext(DBContext);
  useEffect(() => {
      const storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];
      setTaskList(storedTaskList);
  }, [theme.DBUpdate]);

  return (
    <div className='Tasks_Parent'>
      {Specific_Category === 'All' ?
        taskList.map((taskData, index) => (
          <TaskComponent
            key={index}
            id={index}
            title={JSON.parse(taskData.Title)}
            description={JSON.parse(taskData.Description)}
            date={JSON.parse(taskData.Date)}
            choice={JSON.parse(taskData.Choice)}
            status={taskData.status}
            SetSpecific_Category={SetSpecific_Category}
          />
        ))
        :
        taskList.filter((taskData) => JSON.parse(taskData.Choice) === Specific_Category).map((taskData, index) => (
          <TaskComponent
            key={index}
            id={index}
            title={JSON.parse(taskData.Title)}
            description={JSON.parse(taskData.Description)}
            date={JSON.parse(taskData.Date)}
            choice={JSON.parse(taskData.Choice)}
            status={taskData.status}
            SetSpecific_Category={SetSpecific_Category}
          />
        ))
      }
    </div>
  );
};

export default Tasks;
