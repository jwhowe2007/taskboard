import React from 'react';
import logo from './logo.svg';
import './TaskBoard.css';

function TaskBoard() {
  return (
    <div className="TaskBoard">
        <div className="swimlane backlog">Lane 1</div>
        <div className="swimlane todo">Lane 2</div>
        <div className="swimlane in-progress">Lane 3</div>
        <div className="swimlane completed">Lane 4</div>
    </div>
  );
}

export default TaskBoard;
