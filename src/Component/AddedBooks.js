import React from "react";

const AddedBooks = (props) => {
  const { book, remove } = props;
  const { id, title, author } = book;
  // console.log(added);
  return (
    <div className="Book">
      <h1>{title}</h1>
      <h3>{author} </h3>
      <br />
      <button onClick={() => remove(id)}>Remove</button>
    </div>
  );
};

export default AddedBooks;
