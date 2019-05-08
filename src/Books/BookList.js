import React from 'react';
import Book from './Book';
import SearchBooks from './SearchBooks';
import axios from 'axios';

import { Link, Route } from 'react-router-dom';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isbns: []
    };
  }


  // const bookISBNs = this.state.books.filter( book => {
  //   if(book.isbn === undefined) {
  //     return false;
  //   } else {
  //     return true;
  //     }
  // })

  // const bookISBN = bookISBNs.map( book => {
  //   return book.isbn[0];
  // })

  fetchBooks = (event) => {
    event.preventDefault();
    axios
    .get(`https://openlibrary.org/search.json?q=${this.state.searchValue}`)
    .then(response => this.setState({
      books: response.data.docs,
      searchValue: '',
      isbns: response.data.docs.filter( book => book.isbn !== undefined ).map(book => book.isbn[0])
    }))
    .catch(err => console.log(err));
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value,
    })
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <SearchBooks 
          fetchBooks={this.fetchBooks}
          value={this.state.searchValue}
          handleChanges={this.handleChanges}
        />
        {this.state.books.map( (book, index) => {
          return (
            <Book 
              title={book.title}
              author={book.author_name}
              isbn={this.state.isbns[index]}
              key={index}
            />
        )
        })}
        {console.log(this.state.isbns)}
        <Route
          path="/books/:title"
          render={props => <Book {...props} />}
          />
      </div>
    )
  }
}

  export default BookList;