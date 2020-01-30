import React from 'react';
import './TaskBoard.css';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      // Task arrays per column
      backlogTasks: [],
      todoTasks: [],
      inProgressTasks: [],
      completedTasks: []
    }
  }

  render() {
    return (
      <div className="taskboard">
          <div className="swimlane backlog">
            <span className="title">Backlog</span>

            <div className="add-task-button">
              <button>+ Add Task</button>
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
