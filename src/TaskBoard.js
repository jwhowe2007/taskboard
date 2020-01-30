import React from 'react';
import TaskCard from './TaskCard.js';

import './TaskBoard.css';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);

    this.firstColumn = "backlog";
    this.lastColumn = "completed";

    this.state = {

      // Task arrays per column
      tasks: {
        backlog: [],
        todo: [],
        inProgress: [],
        completed: []
      }
    }
  }

  addTask(column) {
    var choice = prompt('Enter the title for your new task', 'New Task');

    var newTaskCard = <TaskCard
      task={ choice }
      firstColumn={ column === this.firstColumn }
      lastColumn={ column === this.lastColumn }
    />;

    this.setState((newState, props) => {

      newState.tasks[column].push(newTaskCard);

      return newState;
    });
  }

  render() {
    const backlogTasks = this.state.tasks.backlog.map((card) => {

        return card;
    });

    const todoTasks = this.state.tasks.todo.map((card) => {

        return card;
    });

    const inProgressTasks = this.state.tasks.inProgress.map((card) => {

        return card;
    });

    const completedTasks = this.state.tasks.completed.map((card) => {

        return card;
    });

    return (
      <div className="taskboard">
        <div className="swimlane backlog">
          <span className="title">Backlog</span>

          <div className="add-task-button">
            <button onClick={ this.addTask.bind(this, 'backlog') }>+ Add Task</button>
          </div>

          { backlogTasks }
        </div>

        <div className="swimlane todo">
          <span className="title">Todo</span>

          <div className="add-task-button">
            <button onClick={ this.addTask.bind(this, 'todo') }>+ Add Task</button>
          </div>

          { todoTasks }
        </div>

        <div className="swimlane in-progress">
          <span className="title">In Progress</span>

          <div className="add-task-button">
            <button onClick={ this.addTask.bind(this, 'inProgress') }>+ Add Task</button>
          </div>

          { inProgressTasks }
        </div>

        <div className="swimlane completed">
          <span className="title">Completed</span>

          <div className="add-task-button">
            <button onClick={ this.addTask.bind(this, 'completed') }>+ Add Task</button>
          </div>

          { completedTasks }
        </div>
      </div>
    );
  }
}

export default TaskBoard;
