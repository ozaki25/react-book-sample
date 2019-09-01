import React from 'react';
import { Routes } from '../../routes/router';

function EditBook({ history }) {
  const onClick = () => history.push(Routes.books);
  return (
    <div>
      <h1>EditBook</h1>
      <button onClick={onClick}>Book List</button>
    </div>
  );
}

export default EditBook;
