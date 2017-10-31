import React, { Component } from 'react';

class Toolbar extends Component {
  constructor(...args) {
    super(...args);
    this.setState( {
      joke: 'The Joke',
    });
  }


  render() {
    return <p>{this.state.joke}</p>;
  }
};

export default Toolbar