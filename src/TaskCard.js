import React from 'react';

class TaskCard extends React.Component {

  render() {
    const leftArrow = <span className="left-arrow"> &lt; </span>;
    const rightArrow = <span className="right-arrow"> &gt; </span>;

    return (
      <div className="task-card">

        { !this.props.firstColumn ? leftArrow : null }
        <span>{ this.props.task }</span>
        { !this.props.lastColumn ? rightArrow : null }
      </div>
    );
  }
}

export default TaskCard;
