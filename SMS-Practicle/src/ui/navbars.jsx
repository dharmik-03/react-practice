import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export const Navbars = () => {
    const navigate=useNavigate()

  return (
    <Navbar expand="lg" className="bg-secondary rounded-3">
      <Container>
        <Navbar.Brand href="#home">Student M System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-black text-bold' onClick={()=>navigate("/add")}>Add</Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );

}

