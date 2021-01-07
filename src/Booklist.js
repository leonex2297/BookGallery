import React, { useState } from "react";
import "./index.css";
import Book from "./Component/Book";
import books from "./Component/Bookdetail";
import AddedBooks from "./Component/AddedBooks";

const Booklist = () => {
  const [books1, setBooks1] = useState(books);
  const [cartBooks, setCartBooks] = useState([]);

  const remove = (bookId) => {
    console.log(bookId);
    let newbooklist = cartBooks.filter((val) => val.id !== bookId);
    console.log(newbooklist);
    setCartBooks(newbooklist);
  };
  const getDataFromMyChild = (bookId) => {
    // console.log(bookId);
    let newBook = books1.filter((val) => val.id === bookId);
    let cartBook = [...cartBooks, newBook[0]];

    setCartBooks(cartBook);
  };

  return (
    <>
      <div className="Booklist">
        {books1.map((book) => {
          return (
            <>
              <Book key={book.id} book={book} data={getDataFromMyChild} />
            </>
          );
        })}
      </div>
      <br />
      <h1>Cart Items </h1>
      <div className="Booklist">
        {cartBooks.map((cartbook) => {
          console.log(cartbook);
          return (
            <>
              <AddedBooks key={cartbook.id} remove={remove} book={cartbook} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Booklist;
