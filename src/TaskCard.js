import React from 'react';

class TaskCard extends React.Component {

  render() {

    return (
      <div className="task-card">
        <span>{ this.props.task }</span>
      </div>
    );
  }
}

export default TaskCard;
