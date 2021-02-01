import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Employee from './employee';
import Department from './department';
import Project from './project';


function App() {
  return(
    <div>
      <h2>Welcome to App Component...</h2>

      <ul>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/department">Departments</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <Route path="/employees" component={Employee}></Route>
      <Route path="/departments" component={Department}></Route>
      <Route path="/projects" component={Project}></Route>
    </div>
  )
}


ReactDOM.render(<BrowserRouter>
  <App>
    
  </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
