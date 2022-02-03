import { Navbar } from "react-bootstrap";
import { Nav, Container } from "react-bootstrap";

const NB = (props) => {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="/">Cowin </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {!props.children && <Nav.Link href="/login">Login</Nav.Link>}
          {!props.children && <Nav.Link href="/Signup">Signup</Nav.Link>}
          {props.children && (
            <Nav.Link href="">{` ${props.children}`}</Nav.Link>
          )}
          {props.children && <Nav.Link href="/login">Logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NB;
