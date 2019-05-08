import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Book from './Books/Book';
import BookList from './Books/BookList';

class App extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   // axios
  //   //   .get(`http://openlibrary.org/search.json?q=${this.state.searchValue}`)
  //   //   .then(response => console.log(response.data.docs))
  //   //   .catch(err => console.log(err));
  //   console.log(this.state.books);
  // }

  // handleChanges = event => {
  //   event.preventDefault();
  //   this.setState({
  //     searchValue: event.target.value,
  //   })
  //   console.log(event.target.value);
  // }

  getISBN = () => {
    this.state.books.map( book => {
      if(book.isbn === undefined) {
        return "none"
      }

      return book.isbn[0]
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.fetchBooks(this.state.searchValue);
  // }

  render() {
    return (
      <div className="App">
        <h1>book app</h1>
        {/* <form onSubmit={this.fetchBooks}>
          <input
            placeholder="search books"
            value={this.value}
            onChange={this.handleChanges}
            type="text"
          >
          </input>
          <button type="submit" onClick={this.fetchBooks} >submit</button>
        </form> */}

        <Route
          exact
          path="/"
          render={props => <BookList {...props} />}
          />
      </div>
    )
  }
}

export default App;
