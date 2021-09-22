import './App.css';

import { Link, Redirect, Router } from '@reach/router';

import NotFound from './views/NotFound';
import Home from './views/HomePage';
import Pets from './views/Pets';
import Pet from './views/Pet';
import NewPet from './views/NewPet';
import EditPet from './views/EditPet';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import Cat from '../src/Img/whitecat150.png';
import Dog from '../src/Img/dog150.png';
import Rabbit from '../src/Img/rabbit100.png';

function App() {
	return (
		<div>
    <Navbar collapseOnSelect expand="lg" className="bcolor3">
      <Container>
      <Navbar.Brand href="#home" style={{color: "white"}}>Pet Adoption Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features" style={{color: "white"}}>Home</Nav.Link>
          <Nav.Link href="#pricing" style={{color: "white"}}>Adopt</Nav.Link>
          <Nav.Link href="#pricing" style={{color: "white"}}>Learn</Nav.Link>
          <Nav.Link href="#pricing" style={{color: "white"}}>About Us</Nav.Link>
          <Nav.Link href="#pricing" style={{color: "white"}}>Donate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
			<Router className="w-100" fluid>
				<Pets path="/pets" />
				<Home path="/home"/>
				<Pet path="/pets/:id" />
				<EditPet path="/pets/:id/edit" />
				<NewPet path="/pets/new" />
				<Redirect from="/" to="/pets" noThrow="true" />
				<NotFound default path="/notFound" />
			</Router>
`     <Nav className="justify-content-center bcolor3" style={{height: '100px', marginTop: "0px"}}>
        <Nav.Item>
          <Nav.Link href="/home" className="colorW">Location</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="colorW">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="colorW">Careers</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
	);
}

export default App;
