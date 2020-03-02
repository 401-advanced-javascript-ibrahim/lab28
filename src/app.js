/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/header.js';
import Form from './components/form.js';
import Results from './components/results.js';
import './app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleResults = state =>{
    console.log('here',state);
    this.setState(state);
  }
  render() {
    return (
      <>
        <Header />
        <Form  sendResults={this.handleResults}/>
        <Results  results={this.state}/>
      </>
    );
  }
}

export default App;