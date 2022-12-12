import {Navbar, Nav, Container} from "react-bootstrap"

// class navbar, child class dari main layout js
const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap Fetch API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums">VIEW ALBUMS</Nav.Link>
            <Nav.Link href="/posts">VIEW POSTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation