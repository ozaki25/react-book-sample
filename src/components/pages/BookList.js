import React from 'react';
import { Routes } from '../../routes/router';

function BookList({ history }) {
  const onClick = () => history.push(Routes.newBook);
  return (
    <div>
      <h1>BookList</h1>
      <button onClick={onClick}>New Book</button>
    </div>
  );
}

export default BookList;
