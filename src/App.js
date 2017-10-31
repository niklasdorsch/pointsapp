import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import Toolbar from './Toolbar.js'
import data from './data.js'
import LeagueList from './LeagueList.js'
import LeaguePage from './LeaguePage.js'
import LoginPage from './LoginPage.js'

import 'bulma/css/bulma.css'




const Home = withRouter(class extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      jokes: [],
      page: 1,
    };
  }
  render() {
    return (
      <main>
        <div className="center">Home Page</div>
      </main>
    );
  }
});





class App extends Component {
  state = {users: []}

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    console.log(data);
    return (
      <BrowserRouter>

        <div className="App">
          <div>
            <Toolbar/>
            <Route exact path="/" component={Home} />
            <Route path="/leagues" render={(props) => (
              <LeagueList {...props} leagues={data.leagues} />)} />
            <Route path="/league/:id" render={(props) => (
              <LeaguePage {...props} leagues={data.leagues} />)} />
          </div>
          <Route exact path="/login" component={LoginPage} />


          
        </div>
     </BrowserRouter>

    );
  }
}

export default App;
