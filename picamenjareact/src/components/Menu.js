import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useSearchParams,
  //useParams,
} from "react-router-dom";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";

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
                <NavLink className="nav-link" to="/modalitats">
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
          {/* <Route path="/comentaris" element={<Comentaris />} />
          <Route path="/comentari/:id_comentari" element={<CridaComentari />} /> */}
          <Route path="/restaurants" element={<Restaurants />} />
          <Route
            path="/restaurant/:id_restaurant"
            element={<CridaRestaurant />}
          />
          {/* <Route path="/exposicio/:id_exposicio" element={<CridaExposicio />} />
          <Route path="/exposicions" element={<Exposicions />} />
          <Route path="/modalitats" element={<Modalitats />} />
          <Route path="/obres" element={<Obres />} />
          <Route path="/obra/:id_obra" element={<CridaObres />} />
          <Route path="/serveis" element={<Serveis />} />
          <Route path="/tipus" element={<Tipus />} />
          <Route path="/usuaris" element={<Usuaris />} />
          <Route path="/usuari/:id_usuari" element={<CridaUsuari />} />
          <Route path="/" element={<CarouselFotos />} />
          <Route path="/modalitat/:id_modalitat" element={<CridaModalitat />} />
          <Route path="/perfilUsuari" element={<PerfilUsuari />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

function CridaRestaurant() {
  let params = useSearchParams();
  return <Restaurant id_restaurant={params.id_restaurant} />;
}
