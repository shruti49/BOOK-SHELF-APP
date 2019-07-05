import React, { Component } from "react";
import Header from "./Header";
import Book from "./Book";
import { Link } from "react-router-dom";

export default class BookShelves extends Component {
  render() {
    let shelves = [
      {
        title: "Currently Reading",
        type: "currentlyReading"
      },
      {
        title: "Want To Read",
        type: "wantToRead"
      },
      { title: "Read", type: "read" }
    ];

    const { books } = this.props;

    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {/*MAPPING THROUGH SHELVES ARRAY*/}
            {shelves.map((shelf, i) => {
              return (
                <div key={i} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.title}</h2>
                  <Book
                    shelf={shelf.type}
                    books={books}
                    onValueChange={this.props.onValueChange}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
