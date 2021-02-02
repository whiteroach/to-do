import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export class toDo extends Component {
  render() {
    const{item, onStatusChange} = this.props;
    return (
      <div>
        <div>
          <p>{item.task}</p>
          <Button onClick = { () => onStatusChange(item.id)}></Button>
        </div>
      </div>
    )
  }
}

export default toDo
