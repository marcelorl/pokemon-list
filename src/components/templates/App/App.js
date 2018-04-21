import React from 'react'
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap'

const App = ({ children }) =>
  ([
    <Navbar key='navbar' color='dark' dark expand='xs'>
      <NavbarBrand href='/'>POKEMON</NavbarBrand>
    </Navbar>,
    <Container key='container'>
      {children}
    </Container>
  ])

export default App
