import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ToolbarButton from "./ToolbarButton.js"

const Toolbar = withRouter(class extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      path: '/leagues',
    };
  }



  render() {
    const paths =  [
            {path:"/",name:"Home"},
            {path:"/leagues",name:"Leagues"}
            ];
    return <div id="toolbar" > 
            <h1 className="inline app-title-font">PointsApp</h1>
            <nav className="navbar tabs is-boxed is-centered center inline">
              <ul>
                {paths.map(({path,name}) => {
                  return <ToolbarButton path={path}>{name}</ToolbarButton>
                })}
              </ul>
            </nav>
          </div>
  }
});

export default Toolbar