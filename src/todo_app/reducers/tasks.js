import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, DELETE_TASK} from '../../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case DELETE_TASK:
      return [...state].filter(task => task.id !== id);

   
    case REMOVE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = 2;
        }
        return task;
        
      })

    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
         
        
          if(task.isCompleted===0){
                        task.isCompleted =1;
                      }
          else {
            if(task.isCompleted!==2){
            task.isCompleted =0;}
          }
        }
        return task;
      })
    default:
      return state;
  }
}

export default tasks;


