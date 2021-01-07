import React, { useState } from "react";
import "./index.css";
import Book from "./Component/Book";
import books from "./Component/Bookdetail";
import AddedBooks from "./Component/AddedBooks";

const Booklist = () => {
  const [books1, setBooks1] = useState(books);
  const [newBooks1, setNewBooks] = useState([]);

  const remove = (bookId) => {
    console.log(bookId);
    let newbooklist = newBooks1.filter((val) => val.id !== bookId);
    console.log(newbooklist);
    let bk = [newbooklist];
    setNewBooks(bk);
  };
  const getDataFromMyChild = (bookId) => {
    // console.log(bookId);
    let newBook = books1.filter((val) => val.id === bookId);
    let cardBooks = [...newBooks1, newBook];

    setNewBooks(cardBooks);
  };

  return (
    <>
      <div className="Booklist">
        {books1.map((book) => {
          return (
            <>
              <Book key={book.id} book={book} func={getDataFromMyChild} />
            </>
          );
        })}
      </div>
      <br />
      <h1>Card Items </h1>
      <div className="Booklist">
        {newBooks1.map((cardbook) => {
          console.log(cardbook);
          return (
            <>
              <AddedBooks key={cardbook.id} remove={remove} added={cardbook} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Booklist;
