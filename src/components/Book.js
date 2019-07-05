import React from "react";

const Book = props => {
  const { books, shelf } = props;

  //FILTERING OF BOOKS ACCORDING TO THEIR SHELF TYPE
  const filtered = books.filter(b => b.shelf === shelf);
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {/*MAPPING THE FILTERED ARRAY*/}
        {filtered.map((book, i) => (
          <li key={i}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      book.imageLinks
                        ? book.imageLinks.thumbnail
                        : "No thumbnail"
                    })`
                  }}
                />
                <div className="book-shelf-changer">
                  <select
                    onChange={event =>
                      props.onValueChange(book, event.target.value)
                    }
                    value={book.shelf ? book.shelf : "none"} //if shelf type is not defined then it is none
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Book;
