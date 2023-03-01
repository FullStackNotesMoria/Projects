import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarx = () => {
  return (
    <div >
      <Navbar bg="dark" variant="dark" expand="lg" className='p-4'>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto text-light display-6">
            <Nav.Link className='p-3' href="#home">Klavye-Mouse</Nav.Link>
            <Nav.Link className='p-3' href="#link1">Kulaklık</Nav.Link>
            <Nav.Link className='p-3' href="#link2">Yazıcı</Nav.Link>
            <Nav.Link className='p-3' href="#link3">Tarayıcı</Nav.Link>
            <Nav.Link className='p-3' href="#link4">Bilgisayar</Nav.Link>
            <Nav.Link className='p-3' href="#link5">Monitör</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarx;