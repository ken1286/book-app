import React, { Component } from 'react';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  render() {
    // if (!this.state.movie) {
    //   return <div>Loading book information...</div>;
    // }
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <br />
        <br />
      </div>
    )
  }
}

  export default Book;