import React, { Component } from 'react';
import ToDone from './toDone';
import{Jumbotron} from 'react-bootstrap'

export class toDoneContainer extends Component {
  render() {
    const{arrToDone, handleChange} = this.props;
    return (
      <div className='col-6'>
        <Jumbotron className='jumbo'>

          <h4>BACKLOG:</h4>
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
        </Jumbotron>
      </div>
    )
  }
}

export default toDoneContainer
