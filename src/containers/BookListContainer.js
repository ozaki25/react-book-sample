import React from 'react';
import useReactRouter from 'use-react-router';
import BookList from 'components/pages/BookList';

function BookListContainer() {
  const { history } = useReactRouter();
  return <BookList history={history} />;
}

export default BookListContainer;
