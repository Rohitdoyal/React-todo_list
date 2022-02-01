import React, { Fragment } from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';
import Notice from './Notice';


const App = () => (
  <Fragment>
    <Title title="ToDo List App" />
    <ToDo />
    <Notice/>
  </Fragment>
);

export default App;
