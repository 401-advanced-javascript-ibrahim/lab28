/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/header.js';
import Form from './components/form.js';
import './app.scss';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default App;