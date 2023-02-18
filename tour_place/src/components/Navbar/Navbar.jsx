import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbarx = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto text-light">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#link1">FOR YOU</Nav.Link>
            <Nav.Link href="#link2">SERVICES</Nav.Link>
            <Nav.Link href="#link3">BLOG</Nav.Link>
            <Nav.Link href="#link4">VLOG</Nav.Link>
            <Nav.Link href="#link5">CONTACT</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarx;