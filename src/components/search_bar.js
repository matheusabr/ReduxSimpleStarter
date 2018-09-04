import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        // To really update input value
        // we need to set to it the 
        // new state value
        <input
          value={this.state.term}
          onChange={event => this.setState( { term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
