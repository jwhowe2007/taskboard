import React from 'react';
import TaskCard from './TaskCard.js';

class Swimlane extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    var choice = prompt('Enter the title for your new task', 'New Task');

    const newCardInfo = {
      id: Date.now(),
      swimlaneIndex: this.props.position,
      task: choice,
      move: this.props.moveTask
    };

    this.props.addTask(newCardInfo);
  }

  render() {
    const tasks = this.props.tasks.filter((card) => {

      return card.swimlaneIndex === this.props.position;
    }).map((card) => {

      return <TaskCard
        id={ card.id }
        task={ card.task }
        first={ this.props.first || null }
        last={ this.props.last || null }
        swimlaneIndex={ card.swimlaneIndex }
        move={ card.move }
      />;
    });

    return <div className={`swimlane ${this.props.name}`}>
      <span className="title">{ this.props.title }</span>

      <div className="add-task-button">
        <button onClick={ this.addTask }>+ Add Task</button>
      </div>

      { tasks }
    </div>;
  }
}

export default Swimlane;
