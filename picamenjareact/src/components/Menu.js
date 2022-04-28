import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Comentaris from "./Comentaris";
import Idioma from "./Idioma";
import Idiomes from "./Idiomes";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";
import Servei from "./Servei";
import Serveis from "./Serveis";
import Tipu from "./Tipu";
import Tipus from "./Tipus";

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar
          bg="dark"
          className="color-nav"
          variant="dark"
          expand="lg"
          sticky="top"
        >
          <Container>
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">
                Inici
              </NavLink>
              <NavLink className="nav-link" to="/explora">
                Explora
              </NavLink>

              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/comentaris">
                  Comentaris
                </NavLink>
                <NavLink className="nav-link" to="/fotos">
                  Fotos
                </NavLink>
                <NavLink className="nav-link" to="/idiomes">
                  Idiomes
                </NavLink>
                <NavLink className="nav-link" to="/restaurants_serveis">
                  Restaurants_Serveis
                </NavLink>
                <NavLink className="nav-link" to="/restaurants">
                  Restaurants
                </NavLink>
                <NavLink className="nav-link" to="/serveis">
                  Serveis
                </NavLink>
                <NavLink className="nav-link" to="/tipus">
                  Tipus
                </NavLink>
                <NavLink className="nav-link" to="/traduccions">
                  Traduccions
                </NavLink>
                <NavLink className="nav-link" to="/usuaris">
                  Usuaris
                </NavLink>
                <NavLink className="nav-link" to="/valoracions">
                  Valoracions
                </NavLink>
                <NavLink className="nav-link" to="/perfilUsuari">
                  Perfil
                </NavLink>
              </Nav>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/comentaris" element={<Comentaris />} />
          <Route path="/idiomes" element={<Idiomes />} />
          <Route path="/idioma/:id_idioma" element={<CridaIdioma />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id_restaurant" element={<CridaRestaurant />} />
          <Route path="/serveis" element={<Serveis />} />
          <Route path="/servei/:id_servei" element={<CridaServei />} />
          <Route path="/tipus" element={<Tipus />} />
          <Route path="/tipus/:id_tipus" element={<CridaTipus />} />
          {/* <Route path="/exposicio/:id_exposicio" element={<CridaExposicio />} />
          <Route path="/exposicions" element={<Exposicions />} />
          <Route path="/obres" element={<Obres />} />
          <Route path="/obra/:id_obra" element={<CridaObres />} />
          <Route path="/usuaris" element={<Usuaris />} />
          <Route path="/usuari/:id_usuari" element={<CridaUsuari />} />
          <Route path="/" element={<CarouselFotos />} />
          <Route path="/perfilUsuari" element={<PerfilUsuari />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

function CridaRestaurant() {
  let params = useParams();
  return <Restaurant id_restaurant={params.id_restaurant} />
}

function CridaIdioma() {
  let params = useParams();
  return <Idioma id_idioma={params.id_idioma} />
}

function CridaServei() {
  let params = useParams();
  return <Servei id_servei={params.id_servei} />
}

function CridaTipus() {
  let params = useParams();
  return <Tipu id_tipus={params.id_tipus} />
}