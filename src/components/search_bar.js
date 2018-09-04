import React, { Component } from 'react';

class SearchBar extends Component {
  // To use and init state we need
  // to use a constructor of the class
  // and set state as a plain object
  constructor(props) {
    // super calls the own constructor
    // of React.Component
    super(props);
    // Initialize state
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        // Updating a state by using setState
        // Warning: Do not update by direct access
        // like this.stater.term
        <input onChange={event => this.setState( { term: event.target.value })} />
        // Accessing a state
        My name is {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
