import React from 'react';
import TaskCard from './TaskCard';
import './styles/Tasks.css';

const Tasks = ({ finishTask, deleteTask, handleToggleEdit, tasks }) => {
  if (!tasks.length) return <p className='noTasks'>No Tasks To Show</p>;

  return (
    <div className='container'>
      <p className='tasksNum'>{`you have  ${tasks.length} tasks`}</p>

      <ul className='grid'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            handleFinishTask={finishTask}
            handleDeleteTask={deleteTask}
            handleToggleEdit={handleToggleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
