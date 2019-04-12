import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './Create';
import Get from './Get';
// import "./App.css"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="jumbotron">
            <hr />
            <h2 className="text text-info text-center">PRODUCT (using MERNSTACK)</h2>
            <hr />
            <ul>
              <li><Link to={'/create'} >Create</Link></li>
              <li><Link to={'/Get'} >List</Link></li>
            </ul>

            <Switch>
              <Route exact path='/create' component={Create} />
              <Route path='/Get' component={Get} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
