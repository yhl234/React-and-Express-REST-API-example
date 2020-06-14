import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Backend from './pages/Backend';
import Home from './pages/Home';
import Thanks from './pages/Thanks';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/backend">Backend</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/backend" component={Backend} />
          <Route path="/thanks" component={Thanks} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
