import React from 'react';
import './styles/TaskCard.css';

const TaskCard = ({
  done,
  name,
  desc,
  time,
  id,
  handleFinishTask,
  handleDeleteTask,
  handleToggleEdit,
  color,
}) => {
  const taskCheckedColor = !done ? 'white' : '#534cef';

  return (
    <li className='card' id={id} style={{ borderColor: color }}>
      <div className='card-head'>
        <h3 className='task-name'>{name}</h3>
        <i
          id={id}
          className='fa-solid fa-check'
          onClick={handleFinishTask}
          style={{ backgroundColor: taskCheckedColor }}></i>
      </div>

      <div className='task-info'>
        <p className='task-desc'>{desc}</p>
        <span className='task-time'>time: {time}h</span>
      </div>

      <div className='icons'>
        <i
          id={id}
          className='fa-solid fa-pen-to-square'
          style={{ color }}
          onClick={handleToggleEdit}></i>
        <i
          id={id}
          className='fa-solid fa-trash-can'
          style={{ color }}
          onClick={handleDeleteTask}></i>
      </div>
    </li>
  );
};

export default TaskCard;
