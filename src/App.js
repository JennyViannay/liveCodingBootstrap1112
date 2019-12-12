import React from "react";
import "./App.css";
import Navbar from "./components/ Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container text-center bg-perso">

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg" class="d-block w-100" alt="..." />
          </div>
        <div class="carousel-item">
          <img src="https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://www.sciencesetavenir.fr/assets/inline-img/2019/04/10/w453-101706-trou-noir-galaxie.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>

        <h1 className="mt-3 color">Title Bootstrap</h1>
        <div className="row text-justify">
          <div className="col-lg-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              venenatis in enim nec accumsan. Donec consequat, velit sed dictum
              vehicula, orci lacus consectetur tortor, nec molestie odio sem eu
              dui. Morbi eu commodo velit, eu aliquet ligula. Fusce lacinia
              aliquam varius. Mauris et semper odio. Nulla at ligula ante.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              venenatis in enim nec accumsan. Donec consequat, velit sed dictum
              vehicula, orci lacus consectetur tortor, nec molestie odio sem eu
              dui. Morbi eu commodo velit, eu aliquet ligula. Fusce lacinia
              aliquam varius. Mauris et semper odio. Nulla at ligula ante.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              venenatis in enim nec accumsan. Donec consequat, velit sed dictum
              vehicula, orci lacus consectetur tortor, nec molestie odio sem eu
              dui. Morbi eu commodo velit, eu aliquet ligula. Fusce lacinia
              aliquam varius. Mauris et semper odio. Nulla at ligula ante.
            </p>
          </div>
        </div>

        <div className="row">
          <button type="button" class="btn btn-primary mx-1">
            Primary
          </button>
          <button type="button" class="btn btn-yellow mx-1">
            Secondary
          </button>
          <button type="button" class="btn btn-success mx-1">
            Success
          </button>
          <button type="button" class="btn btn-danger mx-1">
            Danger
          </button>
          <button type="button" class="btn btn-warning mx-1">
            Warning
          </button>
          <button type="button" class="btn btn-info mx-1">
            Info
          </button>
          <button type="button" class="btn btn-light mx-1">
            Light
          </button>
          <button type="button" class="btn btn-dark mx-1">
            Dark
          </button>

          <button type="button" class="btn btn-link">
            Link
          </button>
        </div>
      </div>
    </div>
  );
}

// Taille : xs, sm, md, lg, xl
// Marges : ml, mr, mt, mb -> vertical my -> horizontal mx - 0 à 5
// Padding : pl, pr, pt, pb -> vertical py -> horizontal px - 0 à 5
// Text : -center, -justify -left, -right

export default App;
