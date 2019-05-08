import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Book from './Books/Book';
import BookList from './Books/BookList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchValue: '',
      searchInput: ''
    }
  }

  componentDidMount() {
    // axios
    //   .get(`http://openlibrary.org/search.json?q=${this.state.searchValue}`)
    //   .then(response => console.log(response.data.docs))
    //   .catch(err => console.log(err));
    console.log(this.state.books);
  }

  fetchBooks = (event) => {
    event.preventDefault();
    axios
    .get(`https://openlibrary.org/search.json?q=${this.state.searchValue}`)
    .then(response => this.setState({books: response.data.docs}))
    .catch(err => console.log(err));
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value,
    })
    console.log(event.target.value);
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.fetchBooks(this.state.searchValue);
  // }

  render() {
    return (
      <div className="App">
        <h1>book app</h1>
        <form onSubmit={this.fetchBooks}>
          <input
            placeholder="search books"
            value={this.value}
            onChange={this.handleChanges}
            type="text"
          >
          </input>
          <button type="submit" onClick={this.fetchBooks} >submit</button>
        </form>

        <BookList books={this.state.books} />

        <Route
          path="/books:id"
          render={props => <Book {...props} />}
          />
          {console.log(this.state.books)}
      </div>
    )
  }
}

export default App;
