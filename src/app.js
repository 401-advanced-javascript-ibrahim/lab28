/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/header.js';
import Form from './components/form.js';
import History from './components/history.js';
import './app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  saveToHistory = history =>{
    this.setState({history});
    console.log('__STATE__, [app.js]', this.state);
  }
  render() {
    return (
      <>
        <Header />
        <Form saveToHistory={this.saveToHistory} />
        <History info={this.state.history} />
      </>
    );
  }
}

export default App;