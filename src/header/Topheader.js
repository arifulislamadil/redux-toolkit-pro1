import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Topheader() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0()
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={{ marginTop: "7px", marginLeft: "5px", textDecoration: "none" }} to="/">Home</Link>
            <Link style={{ marginTop: "7px", marginLeft: "5px", textDecoration: "none" }} to="/services">Services</Link>
            <Link style={{ marginTop: "7px", marginLeft: "5px", textDecoration: "none" }} to="/about">About</Link>
            <Link style={{ marginTop: "7px", marginLeft: "5px", textDecoration: "none" }} to="/users">Users</Link>
            <Link style={{ marginTop: "7px", marginLeft: "5px", textDecoration: "none" }} to="/contact">Contact</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>


          {
            isAuthenticated && <div>
              <div>
                <img style={{width:"20px",height: "20px",borderRadius: "50%" }} src={user.picture} alt={user.name} />
                <p>{user.name}</p>
              </div>
            </div>
          }
          {
            isAuthenticated ?
              <div style={{ marginLeft: "5px" }}>
                <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
              </div> :
              <div style={{ marginLeft: "5px" }}>
                <Button onClick={loginWithRedirect}>Login</Button>
              </div>

          }





        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topheader;