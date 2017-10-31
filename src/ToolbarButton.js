import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

const ToolbarButton = withRouter(class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      path: this.props.path
    };
  }
  pushNewHistroy = () => {
    //console.log(this.state.path);
    //console.log(this.props.history.location.pathname);
    if (this.props.history.location.pathname
    != this.state.path) 
    {
      this.props.history.push(
      this.state.path);
    }
  }
  

  render() {
    return <div className="toolbar-button">
              <button className="toolbar-button" onClick={this.pushNewHistroy}>{this.props.children}</button>
            </div>
  }
});

export default ToolbarButton