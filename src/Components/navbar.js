import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar className='nav'>
          <h1><i class="fas fa-check-square"></i>TODO</h1>
        </Navbar>
      </div>
    )
  }
}

export default navbar
