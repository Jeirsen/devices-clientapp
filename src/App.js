import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import AddNewDevice from './components/device-form/DeviceForm';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add-device/:action" component={AddNewDevice} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
