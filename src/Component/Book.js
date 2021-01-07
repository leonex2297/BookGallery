import React from "react";

const Book = (props) => {
  const { id, title, author, image } = props.book;
  const { func } = props;

  return (
    <>
      <div className="Book">
        <img src={image} alt="Pic" />
        <h1>{title}</h1>
        <h3>{author} </h3>
        <br />
        <button onClick={() => func(id)}>Add to Card</button>
      </div>
    </>
  );
};

export default Book;
