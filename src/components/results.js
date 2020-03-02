/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';

class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    console.log('sss',props.result);
    console.log('ssssaasaaa',this.state);

  }

  render(){
    return(
      <>
        <div className="json">
          <ReactJson name="Headers"
            enableClipboard={false}
            collapsed={true}
            src={this.props.results.header}
          />
          <ReactJson name="Response"
            enableClipboard={false}
            collapsed={true}
            src={this.props.results.body}
          />
        </div>
      </>
    );
  }
}

export default Result;