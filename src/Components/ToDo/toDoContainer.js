import React, { Component } from 'react'
import ToDo from './toDo'
export class toDoContainer extends Component {
  render() {
    const{arrToDO, handleChange} = this.props;
    return (
      <div>
        <h4>ToDO:</h4>
        {
          arrToDO.map( item => {
            return(
            <ToDo 
            item= {item}
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

export default toDoContainer
