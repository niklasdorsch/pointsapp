class LeagueList extends Component {
  constructor(...args) {
    super(...args);

    this.state = ( {
      joke: 'On the list',
    });
  }
  render() {
    return <p>{this.state.joke}</p>;
  }
};

export default LeagueList;
