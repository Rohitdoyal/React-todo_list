import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';
import { completeTask } from '../../actions/actionCreator';

const ToDoItem = ({ text, isCompleted, removeTask,deleteTask, id, completeTask}) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-check-square" />
    <i onClick={() => deleteTask(id)} className="fas fa-trash-alt" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.number,
  removeTask: PropTypes.func,
  deleteTask:PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: 0,
  removeTask: () => { },
  deleteTask:() => { },
  id: 0,
}

export default ToDoItem;
