import React from "react";

const AddedBooks = (props) => {
  const { added, remove } = props;
  // console.log(added);
  return (
    <>
      {added.map((book) => {
        const { id, image, title, author } = book;
        return (
          <div className="Book">
            <img src={image} alt="Pic" />
            <h1>{title}</h1>
            <h3>{author} </h3>
            <br />
            <button onClick={() => remove(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default AddedBooks;
