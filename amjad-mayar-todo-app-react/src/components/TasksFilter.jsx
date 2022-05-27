import './styles/TasksFilter.css';

const FilterTasks = ({
  handleFinishedTasks,
  handleTodoTasks,
  handleAllTasks,
  selectedFilter,
}) => {
  return (
    <div className='tasks-filters'>
      <button
        id='all'
        onClick={handleAllTasks}
        className={selectedFilter === 'all' ? 'selectedFilter' : ''}>
        <i className='fa-solid fa-bars'></i>
        All
      </button>

      <button
        id='finished'
        onClick={handleFinishedTasks}
        className={selectedFilter === 'finished' ? 'selectedFilter' : ''}>
        <i className='fa-solid fa-circle-check'></i>
        Completed
      </button>

      <button
        id='todo'
        onClick={handleTodoTasks}
        className={selectedFilter === 'todo' ? 'selectedFilter' : ''}>
        <i className='fa-solid fa-clipboard-list'></i>
        Todo
      </button>
    </div>
  );
};

export default FilterTasks;
<i class='fa-solid fa-bars'></i>;
