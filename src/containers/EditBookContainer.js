import React from 'react';
import useReactRouter from 'use-react-router';
import EditBook from 'components/pages/EditBook';

function EditBookContainer() {
  const { history } = useReactRouter();
  return <EditBook history={history} />;
}

export default EditBookContainer;
