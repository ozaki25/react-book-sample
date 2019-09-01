import React from 'react';
import useReactRouter from 'use-react-router';
import NewBook from 'components/pages/NewBook';

function NewBookContainer() {
  const { history } = useReactRouter();
  return <NewBook history={history} />;
}

export default NewBookContainer;
