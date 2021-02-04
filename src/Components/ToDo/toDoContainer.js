import React, { Component } from 'react'
import ToDo from './toDo'
import {Jumbotron} from 'react-bootstrap'

export class toDoContainer extends Component {
  // state = {
  //   value : ''
  // }

  // handleNewToDoChange = event => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.handleAddToDo(this.state.value);

  //   this.setState({
  //     value:''
  //   });

    
  // }
  render() {
    const{arrToDO, handleChange} = this.props;
  
    return (
      <div className ='col-6 '>
        {/* <form className='row' onSubmit = {this.handleSubmit}>
          <label for ='task'>Task: </label>
          <input value = {this.state.value} type='text' id='task-input' name='task' onChange={this.handleNewToDoChange}/>
          <input type='submit' value = 'ADD'/>
        </form> */}
        <Jumbotron className='jumbo'>
        <h4>TODO:</h4>
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
        </Jumbotron>
      </div>
    )
  }
}

export default toDoContainer
