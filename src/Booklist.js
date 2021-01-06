import React, { useState } from "react";
import "./index.css";
import Book from "./Component/Book";
import books from "./Component/Bookdetail";
import AddedBooks from "./Component/AddedBooks";

const Booklist = () => {
  const [books1, setBooks1] = useState(books);
  const [newBooks1, setNewBooks] = useState([]);

  const remove = (bookId) => {
    let newbooklist = books1.filter((val) => val.id !== bookId);
    setBooks1(newbooklist);
  };
  const getDataFromMyChild = (bookId) => {
    console.log(bookId);
    let newBook = books1.filter((val) => val.id === bookId);

    setNewBooks(newBook);
  };

  return (
    <>
      <div className="Booklist">
        {books1.map((book) => {
          return (
            <>
              <Book
                key={book.id}
                book={book}
                remove={remove}
                func={getDataFromMyChild}
              />
            </>
          );
        })}
      </div>
      <div>
        <AddedBooks added={newBooks1} />
      </div>
    </>
  );
};

export default Booklist;
