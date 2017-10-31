import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LeagueList extends Component {
  constructor(args) {
    super(args);
    console.log("===========");
    console.log(this.props.leagues);
    this.state = ( {
      leagues: this.props.leagues
    });
  }
  componentWillMount() {
  	this.addLeagues();
  }
  addLeagues() {

  }
  render() {
    return (
    	 <table className="table center">
  			<thead>
    			<tr>
      				<th>ID</th>
      				<th>Name</th>
    			</tr>
  			</thead>
  			<tbody>
    	{this.state.leagues.map(function({id,name}, index){
    		return <tr key={index}>
    			
	    			<td>{id}</td>
	    			<td>
	    				<Link to={`/league/${id}`}>{name}</Link>
	    			</td>
    			
    		</tr>
    	})}
        	</tbody>
        </table>


    );
  }
};

export default LeagueList;

