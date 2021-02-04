import './style/App.scss';
import ToDoContainer from './Components/ToDo/toDoContainer';
import ToDoneContainer from './Components/ToDone/toDoneContainer';
import {Container} from 'react-bootstrap';
import Form from './Components/form'
import Nav from './Components/navbar'

import React, { Component } from 'react'

export class App extends Component {
  state = {
    myList: [
      {
        id: 1,
        task: 'Cutting grass',
        done: false
      },
      {
        id: 2, 
        task: 'Cleaning toilet',
        done: false
      },
      {
        id: 3,
        task: 'Shower',
        done: false
      },
      {
        id: 4,
        task: 'Finish with paperwork',
        done: false
      },
      {
        id: 5,
        task: 'Watering plants',
        done: true
      },
      {
        id: 6,
        task: 'Take a walk',
        done: true
      },
      {
        id: 7,
        task: 'Cleaning Dishes',
        done: true
      },
      {
        id: 8,
        task: 'Read a book',
        done: true
      }
    ]
  }

  updateItem = myId => {
    let newList = this.state.myList.map( event => {
      if ( event.id === myId){
        event.done = ! event.done
        return event;
      } else return event;
    })
    this.setState(
      {
        myList:newList
      }
    )
  }

  addItem = value => {
    if(value != ''){
      const newItem = {
        id: this.state.myList.length +1,
        task: value,
        done: true
      }
  
      this.setState({
        myList:[...this.state.myList,newItem]
      }
      )

    }
  }



  render() {
    const toDo = this.state.myList.filter(e1 => e1.done);
    const toDone = this.state.myList.filter(e2 => ! e2.done);
    return (
      <div className="App">
        <Container className='main-container'>
        <Nav />
          <Form handleAddToDo={this.addItem}/>
          <div className= 'row justify-content-around list-box'>
          <ToDoContainer className = 'col' arrToDO = {toDo} handleChange = {this.updateItem}/>
          <ToDoneContainer className = 'col' arrToDone = {toDone} handleChange = {this.updateItem} />

          </div>
        </Container>
      </div>
    )
  }
}

export default App

