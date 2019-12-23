import React, { Fragment } from 'react';
import ItemForm from './ItemForm';
import ItemsList from './ItemsList';

export default function Items() {
  return (
    <Fragment>
      <ItemForm/>
      <ItemsList/>
    </Fragment>
  );
}
