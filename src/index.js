import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import COMP4537 from './COMP4537';
import { Router, Link } from '@reach/router';
import Lab1 from './Lab1';
const App = ({ children }) => (
  <div>
    {children}
    <MyNavbar path={window.location.pathname} />
  </div>
);
const BackButton = () => (
  <div>
    <Link to="../">
      <button type="button">Back</button>
    </Link>
  </div>
);
const CourseList = () => (
  <div>
    <nav>
      <ul>
        <h3>Courses List</h3>
        <li>
          <Link to="COMP4537">COMP4537</Link> {''}
        </li>
        <li>
          <Link to="COMP3800">COMP3800</Link> {''}
        </li>
        <li>
          <Link to="COMP3600">COMP3600</Link> {''}
        </li>
        <li>
          <Link to="COMP4949">COMP4949</Link> {''}
        </li>
        <li>
          <Link to="COMP4948">COMP4948</Link> {''}
        </li>
        <li>
          <Link to="COMP4735">COMP4735</Link> {''}
        </li>
        <li>
          <Link to="COMP4800">COMP4800</Link> {''}
        </li>
      </ul>
    </nav>
  </div>
);
const MyNavbar = (props) => (
  <div>{(props.path !== '/' && <BackButton />) || <CourseList />}</div>
);
ReactDOM.render(
  <Router>
    <App path="/">
      <Home path="/" />
      <COMP4537 path="COMP4537">
        <Lab1 path="labs/1/quizQuestions" />
      </COMP4537>
    </App>
  </Router>,
  document.getElementById('root')
);
