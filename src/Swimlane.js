import React from 'react';
import TaskCard from './TaskCard.js';

class Swimlane extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);

    this.state = {
      cards: []
    };
  }

  addTask() {
    var choice = prompt('Enter the title for your new task', 'New Task');

    var newTaskCard = <TaskCard
      task={ choice }
      first={ this.props.first || null }
      last={ this.props.last || null }
    />;

    this.setState((newState, props) => {

      const newCardInfo = {
        id: Date.now(),
        cardElement: newTaskCard
      };

      newState.cards.push(newCardInfo);

      return newState;
    });
  }

  render() {
    const tasks = this.state.cards.map((card) => {

      return card.cardElement;
    });

    const swimlaneClass = "swimlane " + this.props.name;

    return <div className={ swimlaneClass }>
      <span className="title">{ this.props.title }</span>

      <div className="add-task-button">
        <button onClick={ this.addTask }>+ Add Task</button>
      </div>

      { tasks }
    </div>;
  }
}

export default Swimlane;
