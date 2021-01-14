import React from 'react';
import { Link } from '@reach/router';
const COMP4537 = ({ children }) => {
  return (
    <div className="container">
      <div className="lab_list">
        <h2>COMP4537</h2>
        <div>
          <ul>
            <li>
              <Link to="labs/1/quizQuestions">Lab 1</Link>
            </li>
            <li>Lab 2</li>
            <li>Lab 3</li>
          </ul>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default COMP4537;
