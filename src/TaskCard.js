import React from 'react';

class TaskCard extends React.Component {
  render() {
    const leftArrow = <button onClick={ this.props.move.bind(this, this.props.id, this.props.swimlaneIndex - 1) } className="left-arrow"> &lt; </button>;
    const rightArrow = <button onClick={ this.props.move.bind(this, this.props.id, this.props.swimlaneIndex + 1) } className="right-arrow"> &gt; </button>;

    return (
      <div className="task-card">

        { !this.props.first ? leftArrow : null }
        <span>{ this.props.task }</span>
        { !this.props.last ? rightArrow : null }
      </div>
    );
  }
}

export default TaskCard;
