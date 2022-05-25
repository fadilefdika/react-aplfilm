import { Navbar, Nav, Container } from 'react-bootstrap';
import '../style/navbar.css';

const Navigationbar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand className="nb-b">
          <h4>iniitu</h4>
        </Navbar.Brand>
        <Nav className="nv">
          <Nav.Link href="#trending">Trending</Nav.Link> {/** href supaya ketika di klik akan scroll ke tujuan */}
          <Nav.Link>Rekomendasi</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
