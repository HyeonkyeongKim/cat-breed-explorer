import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cat App
        </Navbar.Brand>

        <Navbar.Text className="mx-auto text-light">
          Find your favorite cat breed
        </Navbar.Text>

        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cats">
            Cats
          </Nav.Link>
          <Nav.Link as={Link} to="/random-cat">
            Today's Cat
          </Nav.Link>


        </Nav>
      </Container>
    </Navbar>
  );
}


export default AppNavbar;