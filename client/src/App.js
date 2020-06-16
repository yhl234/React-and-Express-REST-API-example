import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Backend from './pages/Backend';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <div className="App">
        <Switch>
          <Route path="/backend" component={Backend} />
          <Route path="/thanks" component={Thanks} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
