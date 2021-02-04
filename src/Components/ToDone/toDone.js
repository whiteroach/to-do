import React, { Component } from 'react'




export class toDone extends Component {
  render() {
    const{item, onStatusChange} = this.props;
    return (
      <div>
        <div className='todone-card'>
          <p>{item.task}</p>
          <button onClick = {()=> {onStatusChange(item.id)}} ><i class="fas fa-redo-alt"></i></button>
        </div>
      </div>
    )
  }
}

export default toDone
