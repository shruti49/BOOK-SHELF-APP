import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

export default class SearchPage extends Component {
  state = {
    searchResult: [],
    query: "",
    items: 0 // We created a state which will indicate if search returned zero items. By default its false
  };

  searchBook = event => {
    const query = event.target.value;
    if (query.length > 0) {
      // if searchquery is true
      BooksAPI.search(event.target.value).then(books => {
        if (books.length > 0) {
          // and books are found
          this.setState({ searchResult: books, items: 2 });
        } else {
          //books are not found
          this.setState({ searchResult: [], items: 1 });
        }
      });
    } else {
      // if searchquery is false
      this.setState({ searchResult: [], query: "", items: 0 });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.items === 0 && <div>Please search</div> //check if zero books are returned coz we cant map on empty array
          }
          {this.state.items === 1 && <div>Zero search result</div> //check if zero books are returned coz we cant map on empty array
          }
          {this.state.items === 2 && (
            <Book
              books={this.state.searchResult}
              onValueChange={this.props.onValueChange}
            />
          )}
        </div>
      </div>
    );
  }
}
