import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export class toDo extends Component {
  render() {
    const{item, onStatusChange} = this.props;
    return (
      <div>
        <div className='todo-card'>
          <p>{item.task}</p>
          <Button variant="dark" size="sm" onClick = { () => onStatusChange(item.id)}><i class="fas fa-check"></i></Button>
        </div>
      </div>
    )
  }
}

export default toDo
