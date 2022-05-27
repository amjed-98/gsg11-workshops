import './styles/Form.css';

function Form({ handleToggle, addName, addDesc, addTime, handleSubmit, tasks, id }) {

  
  return (
    <div className='modal'>
      <form onSubmit={handleSubmit}>
        <i className='fa fa-times' onClick={handleToggle}></i>
        <input
          type='text'
          className='nameInput'
          placeholder='Enter the task name'
          onChange={addName}
          value={tasks?.find((task) => +task.id === +id).name}
        />
        <input
          type='text'
          className='timeInput'
          placeholder='Enter the time you need'
          onChange={addTime}
          value={tasks?.find((task) => +task.id === +id).time}
        />
        <textarea
          className='descTextArea'
          placeholder='Enter the task description'
          onChange={addDesc}
          value={tasks?.find((task) => +task.id === +id).desc}
        />
        <button className='submitBtn' onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}
export default Form;
