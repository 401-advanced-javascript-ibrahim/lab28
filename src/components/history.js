import React from 'react';
import Form from './form.js';


class History extends React.Component {
  render(){
    return(
      <aside>
        <h3>History</h3>
        <div>
          <p>{this.props.info && this.props.info.method}</p>
          <p>{this.props.info && this.props.info.url}</p>
        </div>
      </aside>
    );
  }
}

export default History;