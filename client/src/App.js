import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Pets from "./views/Pets";
import Pet from "./views/Pet";
import NewPet from "./views/NewPet";
import EditPet from "./views/EditPet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from '../src/Img/whitecat150.png'
import Dog from '../src/Img/dog150.png'
import Rabbit from '../src/Img/rabbit100.png'

function App() {
  return (
    <div>
      <ul class="nav justify-content-center bcolor1 p-2 mb-3 d-flex align-items-center">
        <img src={Cat} class="h-1 w-1"/>
        <li class="nav-item h4">
          <a class="nav-link text-dark" href="#">Home</a>
        </li>
        <li class="nav-item h4">
          <a class="nav-link text-dark" href="#">Adopt</a>
        </li>
        <li class="nav-item h4">
          <a class="nav-link text-dark" href="#">Donate</a>
        </li>
        <img src={Dog} class="h-1 w-1"/>
      </ul>
      <Router>
        <Pets path="/pets" />
        <Pet path="/pets/:id" />
        <EditPet path="/pets/:id/edit" />
        <NewPet path="/pets/new" />
        <Redirect from="/" to="/pets" noThrow="true" />
        <NotFound default path="/notFound"/>
      </Router>
      <ul class="nav justify-content-center bcolor1 p-2 mt-4 p-4 d-flex align-items-center">
        <img src={Rabbit} class="h-1 w-1 me-4"/>
        <ul class="list-unstyled ms-4">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Home</a>
          </li>
        </ul>
        <ul class="list-unstyled">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Adopt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Adopt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Adopt</a>
          </li>
        </ul>
        <ul class="list-unstyled me-4">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Donate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Donate</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link text-dark" href="#">Donate</a>
          </li>
        </ul>
        <img src={Rabbit} class="h-1 w-1 ml-3"/>
      </ul>
    </div>
  );
}

export default App;

