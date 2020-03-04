/* eslint-disable no-unused-vars */
import React from 'react';

import Header from './components/header.js';
import Form from './components/form.js';
import History from './components/history.js';
import Results from './components/results.js';
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
  handleResults = state =>{
    console.log('here',state);
    this.setState(state);
  }
  render() {
    return (
      <>
        <Header />
        <History info={this.state.history} />
        <div className='body'>
          <Form saveToHistory={this.saveToHistory} sendResults={this.handleResults}/>
          <Results  results={this.state}/>
        </div>
      </>
    );
  }
}

export default App;