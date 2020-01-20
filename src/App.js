import React, { Component } from 'react'
import Card from './components/card'
import Profile from './components/profile'
import { Link, Switch, Route } from "react-router-dom";
import Comments from './components/comments'
import './App.css';
import axios from "axios";

export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({ list: res.data }));
  };

  render() {
    return (
<div className="App">

    <Link to="/card">
      <button className="button">Contact List</button>
    </Link>

    <Switch>
        <Route
        exact
          path="/card"
          render={() => (
            <div className="contact-list">
                {this.state.list.map(el => (
                  <Card  contact={el} />
                ))}
            </div>
          )}
        />
        <Route
          path="/posts/:id"
          render={(x) => (
            <Profile id={x.match.params.id} />
          )}
        />
        <Route
          path="/comments/:id"
          render={(x) => (
            <Comments id={x.match.params.id} />
          )}
        />
</Switch>
    

    </div>
  )
}
}



