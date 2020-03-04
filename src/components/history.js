/* eslint-disable no-unused-vars */
import React from 'react';
import List from './list';
import Form from './form.js';
import { Route, Router } from 'react-router-dom';


const History = props => {
  let history = props.info && Object.values(props.info).map((val,idx)=>{
    return (
      <li>
        <p key={idx}>{val.method}</p>
        <p key={idx}>{val.url}</p>
      </li>
    );
  });
  console.log('ibrahim',history && history[0].props.children);
  return(
    <aside>
      <h3>History</h3>
      <Route exact path="/history" render={() => <List>{history}</List>}></Route>
    </aside>
  );
};

export default History;