import React from 'react';
import TaskCard from './TaskCard.js';

import './TaskBoard.css';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);

    this.state = {

      // Task arrays per column
      tasks: {
        backlog: [],
        todo: [],
        inProgressTasks: [],
        completedTasks: []
      }
    }
  }

  addTask(column) {
    var choice = prompt('Enter the title for your new task', 'New Task');
    var newTaskCard = <TaskCard task={ choice } />;

    this.setState((newState, props) => {

      newState.tasks[column].push(newTaskCard);

      return newState;
    });
  }

  render() {
    var backlogTasks = this.state.tasks.backlog.map((item) => {

      return <div>{ item }</div>
    });

    return (
      <div className="taskboard">
          <div className="swimlane backlog">
            <span className="title">Backlog</span>

            <div className="add-task-button">
              <button onClick={ this.addTask.bind(this, 'backlog') }>+ Add Task</button>
            </div>

            <div>
            {backlogTasks}
            </div>
          </div>

          <div className="swimlane todo">
            <span className="title">Todo</span>
          </div>

          <div className="swimlane in-progress">
            <span className="title">In Progress</span>
          </div>

          <div className="swimlane completed">
            <span className="title">Completed</span>

          </div>
      </div>
    );
  }
}

export default TaskBoard;
