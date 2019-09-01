import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from 'containers/BookListContainer';
import NewBook from 'containers/NewBookContainer';
import EditBook from 'containers/EditBookContainer';

// 大きくなってきたら別ファイルに移動してもいいかも
export const Routes = {
  books: '/books',
  newBook: '/books/new',
  editBook: '/books/edit',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route path="/" exact component={BookList} />
          <Route path={Routes.books} exact component={BookList} />
          <Route path={Routes.newBook} exact component={NewBook} />
          <Route path={Routes.editBook} exact component={EditBook} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
