import React from 'react';
import Swimlane from './Swimlane.js';

import './TaskBoard.css';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.moveCard = this.moveCard.bind(this);
    this.addCard = this.addCard.bind(this);

    this.state = {
      cards: []
    };
  }

  moveCard(cardId, destIndex) {
    this.setState((newState, props) => {

      var cardIndex = newState.cards.findIndex((card) => {

        return card.id === cardId;
      });

      newState.cards[cardIndex].swimlaneIndex = destIndex;

      return newState;
    });
  }

  addCard(card) {
    this.setState((newState, props) => {

      newState.cards.push(card);

      return newState;
    });
  }

  render() {
    return (
      <div className="taskboard">
        <Swimlane name="backlog" title="Backlog" tasks={ this.state.cards } addTask={ this.addCard } moveTask={ this.moveCard } position={0} first />
        <Swimlane name="todo" title="To Do" tasks={ this.state.cards } addTask={ this.addCard } moveTask={ this.moveCard } position={1} />
        <Swimlane name="in-progress" title="In Progress" tasks={ this.state.cards } addTask={ this.addCard } moveTask={ this.moveCard } position={2} />
        <Swimlane name="completed" title="Completed" tasks={ this.state.cards } addTask={ this.addCard } moveTask={ this.moveCard } position={3} last />
      </div>
    );
  }
}

export default TaskBoard;
