import React from 'react';
import Checker from './components/checker'
import './App.css'
import Help from './views/Help';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="text-center h-screen px-2 lg:px-32">
        <div className="mx-auto">
          <Switch>
            <Route path="/help" component={Help} />
          </Switch>
          <Checker />
        </div>
      </div>
    </Router>
  );
}

export default App;
