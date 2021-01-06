import React from "react";

const AddedBooks = ({ added }) => {
  console.log(added);
  return (
    <>
      {added.map((book) => {
        const { id, image, title, author } = book;
        return (
          <div className="Book" key={id}>
            <img src={image} alt="Pic" />
            <h1>{title}</h1>
            <h3>{author} </h3>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default AddedBooks;
