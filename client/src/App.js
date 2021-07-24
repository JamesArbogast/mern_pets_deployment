import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Pets from "./views/Pets";
import Pet from "./views/Pet";
import NewPet from "./views/NewPet";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div>
      <nav className="nav">
        <h1 className="navbar-brand mb-0" style={{marginLeft: "90px"}}>Pet Shelter</h1>
        <div style={{marginLeft: "90px"}}>
          <Link
            to="/pets"
            style={{margin: "10px", textDecoration: "none", fontSize: "20px", color: "darkblue"}}
          >
            Home
          </Link>
          <Link
            to="/pets/new"
            style={{margin: "10px", textDecoration: "none", fontSize: "20px", color: "darkblue"}}
          >
            Add a pet to the shelter!
          </Link>
        </div>
      </nav>
      <Router>
        <Pets path="/pets" />
        <Pet path="/pets/:id" />
        <EditPet path="/pets/:id/edit" />
        <NewPet path="/pets/new" />
        <Redirect from="/" to="/pets" noThrow="true" />
        <NotFound default path="/notFound"/>
      </Router>
    </div>
  );
}

export default App;

