import React from 'react';
import Swimlane from './Swimlane.js';

import './TaskBoard.css';

class TaskBoard extends React.Component {

  render() {

    return (
      <div className="taskboard">
        <Swimlane name="backlog" title="Backlog" position={0} first />
        <Swimlane name="todo" title="To Do" position={1} />
        <Swimlane name="in-progress" title="In Progress" position={2} />
        <Swimlane name="completed" title="Completed" position={3} last />
      </div>
    );
  }
}

export default TaskBoard;
