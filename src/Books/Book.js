import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookCover: ''
    };
  }

  // fetchMovie = id => {
  //   axios
  //     .get(`http://covers.openlibrary.org/b/isbn/${this.props.isbn}`-M.jpg)
  //     .then(response => {
  //       this.setState(() => ({ movie: response.data }));
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  showImg = props => {
    if(Array.isArray(props.isbn) && props.isbn[0] != undefined) {
      return <img src={`http://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`} alt="cover" />
    } else {
      return null;
    }
  }

  render() {
    // const id = this.props.match.params.id;
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
        <img src={`http://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`} alt="cover" />
        <br />
        <br />
      </div>
    )
  }
}

  export default Book;