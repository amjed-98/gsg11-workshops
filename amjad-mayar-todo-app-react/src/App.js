import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Header from './components/Header';
import TaskFilters from './components/TasksFilter';
import randColor from './utils';
import swal from 'sweetalert';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOnEdit: false,
      task: {
        id: 0,
        name: '',
        time: '',
        desc: '',
        done: false,
      },
      tasks: [],
      filteredTasks: [],
      selectedFilter: 'all',
      id: 0,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  handleToggleEdit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOnEdit: !prevState.isToggleOnEdit,
      id: e.target.parentNode.parentNode.id,
    }));
  };

  addName = (e) => {
    const { time, desc, done, id } = this.state.task;

    this.setState({
      task: {
        id,
        name: e.target.value,
        time,
        desc,
        done,
      },
    });
  };
  addTime = (e) => {
    const { id, name, desc, done } = this.state.task;
    this.setState({
      task: {
        id,
        name,
        time: e.target.value,
        desc,
        done,
      },
    });
  };
  addDesc = (e) => {
    const { time, name, done, id } = this.state.task;
    this.setState({
      task: {
        id,
        name,
        time,
        desc: e.target.value,
        done,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, desc, time } = this.state.task;

    if (!name || !desc || !time) {
      return swal('Error', 'All inputs must be valid', 'error');
    }

    this.state.tasks.push({
      ...this.state.task,
      color: randColor(),
      id: Math.floor(Math.random() * 1000),
    });

    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      filteredTasks: prevState.tasks,
      task: {
        id: 0,
        name: '',
        time: '',
        desc: '',
        done: false,
      },
    }));
  };
  EditTask = (e) => {
    e.preventDefault();
    const { time, desc, name } = this.state.task;
    const { id, tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task) => {
        if (task.id === +id) {
          task.name = name;
          task.time = time;
          task.desc = desc;
          return task;
        }
        return task;
      }),
    });
    this.setState((prevState) => ({
      isToggleOnEdit: !prevState.isToggleOnEdit,
    }));
  };

  deleteTask = ({ target: { id } }) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== +id),
      filteredTasks: prev.tasks.filter((task) => task.id !== +id),
    }));
  };

  finishTask = ({ target: { id } }) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        if (task.id === +id) {
          task.done = !task.done;
          return task;
        }

        return task;
      }),
    });
  };

  filterFinishedTasks = ({ target }) => {
    this.setState(({ tasks }) => ({
      filteredTasks: tasks.filter((task) => task.done),
      selectedFilter: target.id,
    }));
  };

  filterTodoTasks = ({ target }) => {
    this.setState(({ tasks }) => ({
      filteredTasks: tasks.filter((task) => !task.done),
      selectedFilter: target.id,
    }));
  };

  getAllTasks = ({ target }) => {
    this.setState(({ tasks }) => ({ filteredTasks: tasks, selectedFilter: target.id }));
  };

  render() {
    const { isToggleOn, isToggleOnEdit, filteredTasks, selectedFilter, tasks, id } =
      this.state;
    return (
      <div className='App'>
        <Header handleToggle={this.handleToggle} />

        <TaskFilters
          handleFinishedTasks={this.filterFinishedTasks}
          handleTodoTasks={this.filterTodoTasks}
          handleAllTasks={this.getAllTasks}
          selectedFilter={selectedFilter}
        />

        {isToggleOn ? (
          <Form
            handleToggle={this.handleToggle}
            addName={this.addName}
            addTime={this.addTime}
            addDesc={this.addDesc}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ''
        )}
        {isToggleOnEdit ? (
          <Form
            handleToggle={this.handleToggleEdit}
            addName={this.addName}
            addTime={this.addTime}
            addDesc={this.addDesc}
            handleSubmit={this.EditTask}
            tasks={tasks}
            id={id}
          />
        ) : (
          ''
        )}
        <Tasks
          tasks={filteredTasks}
          handleToggleEdit={this.handleToggleEdit}
          finishTask={this.finishTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;

// done Header => title + button(create todo)
// done TaskCard (name,time,desc,edit,delete,doneIcon)
// done todo Tasks => TaskCard
// done form (name,time,desc,submitBtn)

// todo done todos component
// todo uncompleted todos component
// todo all todos component
