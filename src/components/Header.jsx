import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
    <Navbar className="" style={{backgroundColor:"rgb(93, 226, 222)"}}>
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <Navbar.Brand>
            <i class="fa-solid fa-users-gear me-3"></i>
            STUDENT PORTAL
          </Navbar.Brand>
        </div>
  
        <div className="ms-auto">
          <Link to={'/studentmarklist'}>
            <Button variant="danger" className='me-3'>Student Portal</Button>{' '}
          </Link>
          <Link to={'/'}>
            <Button variant="primary">Admin Portal</Button>{' '}
          </Link>
        </div>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header