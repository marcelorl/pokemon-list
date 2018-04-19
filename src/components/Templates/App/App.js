import React, { Component } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap'

class App extends Component {
  render () {
    return ([
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href="/">POKEMON</NavbarBrand>
      </Navbar>,
      <Container>
        asdf
      </Container>
    ])
  }
}

export default App
