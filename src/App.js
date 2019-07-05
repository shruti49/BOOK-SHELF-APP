
import React, { Component } from "react";
import "./App.css";
import BookShelves from "./components/BookShelves";
import SearchPage from "./components/SearchPage";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

//STATE COMPONENT
export default class App extends Component {
  state = {
    books: []
  };

  //MOUNTING OF DATA  FROM BOOKSAPI
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  onValueChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      const filteredBooks = this.state.books.filter(a => book.id !== a.id);
      filteredBooks.push(book);
      this.setState({
        books: filteredBooks
      });
    });
  };

  //RENDERING THE COMPONENTS
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <BookShelves
                books={this.state.books}
                onValueChange={this.onValueChange}
              />
            );
          }}
        />
        <Route
          path="/search"
          render={() => {
            return <SearchPage onValueChange={this.onValueChange} />;
          }}
        />
      </div>
    );
  }
}
