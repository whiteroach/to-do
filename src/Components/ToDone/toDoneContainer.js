import React, { Component } from 'react';
import ToDone from './toDone';

export class toDoneContainer extends Component {
  render() {
    const{arrToDone, handleChange} = this.props;
    return (
      <div>
        <h4>Backlog:</h4>
        {
          arrToDone.map( item => {
            return(
              <ToDone
              item = {item}
              key = {item.id}
              onStatusChange = {handleChange}
              />
            )
          })
        }
      </div>
    )
  }
}

export default toDoneContainer
