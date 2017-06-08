import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingList from './shopping-list';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Dominuskernel Components</h1>
        <ul>
          <li><Link to='/shopping-list'>Shopping List</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      value: ''
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Main}/>
          <Route path='/shopping-list' component={ShoppingList}/>
        </div>
      </Router>
    )
  }
}

render(
  <Components />,
  document.getElementById('root')
);
