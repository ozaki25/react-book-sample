import React from 'react';
import { Routes } from '../../routes/router';

function NewBook({ history }) {
  const onClick = () => history.push(Routes.editBook);
  return (
    <div>
      <h1>NewBook</h1>
      <button onClick={onClick}>Edit Book</button>
    </div>
  );
}

export default NewBook;
