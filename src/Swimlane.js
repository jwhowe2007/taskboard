import React from 'react';
import TaskCard from './TaskCard.js';

class Swimlane extends React.Component {
  constructor(props) {
    super(props);

    // this.moveTask = this.moveTask.bind(this);
    this.addTask = this.addTask.bind(this);

    // this.state = {
    //   cards: []
    // };
  }

  // moveTask(cardId, destIndex) {
  //
  //   // this.setState((newState, props) => {
  //   //
  //   //   newState.cards = newState.cards.filter((card) => {
  //   //
  //   //     return card.id === cardId;
  //   //   }).map((card) => {
  //   //
  //   //     card.index = destIndex;
  //   //
  //   //     return card;
  //   //   });
  //   //
  //   //   console.log("New state: ", newState);
  //   //
  //   //   return newState;
  //   // });
  //
  //   this.props.moveTask(cardId, destIndex);
  // }

  addTask() {
    var choice = prompt('Enter the title for your new task', 'New Task');

    const newCardId = Date.now();

    var newTaskCard = <TaskCard
      id={ newCardId }
      task={ choice }
      first={ this.props.first || null }
      last={ this.props.last || null }
      swimlaneIndex={ this.props.position }
      move={ this.props.moveTask }
    />;

    const newCardInfo = {
      id: newCardId,
      cardElement: newTaskCard,
      swimlaneIndex: this.props.position
    };

    this.props.addTask(newCardInfo);
  }

  render() {

    const tasks = this.props.tasks.filter((card) => {

      return card.swimlaneIndex === this.props.position;
    }).map((card) => {

      return card.cardElement;
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
