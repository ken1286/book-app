import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  render() {
    return (
      <div>
        {this.props.books.map( book => {
          return <Book 
                  title={book.title}
                  author={book.author_name}
                  
                  />
        })}
      </div>
    )
  }
}

  export default BookList;