import React, { useContext, useEffect, useState } from 'react';
import './TrackBox.css';
import { DBContext } from '../App';

const TrackBox = () => {
  const [localLength, setLocalLength] = useState(null);
  const theme = useContext(DBContext);
  //  const [DBUpdate, SetDBUpdate] = useState(true);
  useEffect(() => {
    const totalLength = JSON.parse(localStorage.getItem('taskList')) || [];
    setLocalLength(totalLength.length);
  }, [theme.DBUpdate]);

  return (
    <div className='Progress_Track_div'>
      <div className='Progress_div'>
        <div className='Track_Tasks'>
          <p className='Progress_Track'>
            Total Remaining Tasks: <span className='Total_task'>{localLength}</span>
          </p>
        </div>
        <div className='Progress_bar_parent'>
          <div className='Progress_bar_child' style={{width:(100-(localLength))+'%'}}></div>
        </div>
      </div>
    </div>
  );
};

export default TrackBox;
