import { useContext } from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(() => console.log('logged out'))
    .catch(err => console.error(err))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
      <Container>
        <Link to='/'><Navbar.Brand>Dragon News</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              {
                user?.photoURL ?
                <Image
                  src={user.photoURL}
                  style={{ width: "30px" }}
                  roundedCircle
                /> :
                
                <FaUser />
              }
            </Nav.Link>
            {
              user?.uid ?
              <>
                <Nav.Link>{user?.displayName}</Nav.Link>
                <Button
                  onClick={handleLogout}
                  className="py-0"
                  size="sm"
                  variant="outline-light"
                  style={{ height: "30px", marginTop: "7px" }}
                >Logout</Button>
              </>
              :
              <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
              </>
            }
            <div className="d-lg-none navbar-category">
              <LeftSideNav />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
