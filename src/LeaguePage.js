import React, { Component } from 'react';



const LeaguePage = class extends Component {

  constructor(...args) {
    super(...args); 
    this.state = {
    	league : {},
    	standings: []
    }
  }
  componentWillMount() {
  	var league = this.getStandings();
  	this.sortStandings(league);
  }
  getStandings = () => {
  	for (var i = 0; i < this.props.leagues.length; i++) {
  		if (this.props.leagues[i].id == this.props.match.params.id) {
  			this.setState ({
  				league : this.props.leagues[i]
  			})
  			return this.props.leagues[i];
    	}
	}

  }
  sortStandings = (league) => {
  	console.log(league.standings);
  	this.setState({
  		standings : league.standings.sort((a,b)=> b.points - a.points)
  	});
  }
  render() {
    return (
      <main className="has-text-centered">
        <div>League Page: {this.props.match.params.id}</div>
        <table className="table center">
  			<thead>
    			<tr>
      				<th>Name</th>
      				<th>Points</th>
    			</tr>
  			</thead>
  			<tbody>

    	{
    		this.state.standings.map(function({name,points}, index){
    		return <tr key={index}>
    			<td >{name}</td>
    			<td>{points}</td>
    			</tr>;
    	})}
        	</tbody>
        </table>

      </main>
    );
  }






}







export default LeaguePage;