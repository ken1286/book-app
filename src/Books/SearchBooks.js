import React from 'react';


function SearchBooks(props) {
  return (
    <form onSubmit={props.fetchBooks}>
      <input
        placeholder="search books"
        value={props.value}
        onChange={props.handleChanges}
        type="text"
        name="book-search"
      />
      <button type="submit" onClick={props.fetchBooks}>submit</button>
    </form>
  )
}

export default SearchBooks;