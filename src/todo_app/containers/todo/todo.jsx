import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, completeTask, changeFilter,deleteTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTast = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length < 5 && key === 'Enter') {
      alert("Length is less than 5 Please Enter more text ");    
    }

    if (taskText.length > 4 && key === 'Enter') {
      const { addTast } = this.props;

      addTast((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'all':
        return tasks.filter(task => (task.isCompleted!==2));;
        break;
      case 'completed':
        return tasks.filter(task => (task.isCompleted===1));
        break;
      case 'active':
        return tasks.filter(task => (task.isCompleted!==2)&&(task.isCompleted!==1));
        break;
      
      
      case 'remove':
        return tasks.filter(task => (task.isCompleted===2));
        break;

      default: tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter,deleteTask  } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList removeTask={removeTask} deleteTask={deleteTask} tasksList={filteredTasks} completeTask={completeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTast, removeTask, completeTask, changeFilter,deleteTask})(ToDo);
