import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Comentaris from "./Comentaris";
import Foto from "./Foto";
import Fotos from "./Fotos";
import Idioma from "./Idioma";
import Idiomes from "./Idiomes";
import Inici from "./Inici";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";
import RestaurantServei from "./RestaurantServei";
import RestaurantsFront from "./RestaurantsFront";
import RestaurantServeis from "./RestaurantsServeis";
import Servei from "./Servei";
import Serveis from "./Serveis";
import Tipu from "./Tipu";
import Tipus from "./Tipus";
import Traduccio from "./Traduccio";
import Traduccions from "./Traduccions";
import Usuari from "./Usuari";
import Usuaris from "./Usuaris";
import Valoracions from "./Valoracions";

export default class Menu extends Component {
  render() {
    return (
      <>
        <Container>
          {sessionStorage.getItem("admin") !== 1}
          <>
            {/* <h1 className="row justify-content-center mt-3 mb-3">Pica & Menja</h1> */}
            <div className="parent">
              <Image src={process.env.PUBLIC_URL + '/logoweb.png'}
                alt="PICA & MENJA"
                title="PICA & MENJA" />
            </div>
          </>
        </Container>
        <Container>
          <div className="idiomes">
            <button className="btn btn-link"><Image src={process.env.PUBLIC_URL + '/idiomas.png'}
              width="40" onClick={prova}
            />
            </button>
          </div>
          <div className="idiomes" id="bPerfil" style={{ display: 'none' }}>
            <button className="btn btn-primary btn-lg mb-2">Perfil</button>
          </div>
          <div className="idiomes" id="bLogin" style={{ display: 'none' }}>
            <button className="btn btn-primary btn-lg mb-2">Inicia sessió</button>
            <button className="ms-3 btn btn-info btn-lg mb-2">Regístra't</button>
          </div>

        </Container>
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
                <NavLink className="nav-link" to="/">Inici</NavLink>
                <NavLink className="nav-link" to="/quisom">Informació</NavLink>
                <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
                <NavLink className="nav-link" to="/suggeriments">Suggeriments</NavLink>
                <NavLink className="nav-link" to="/perfilUsuari">Perfil</NavLink>
                
                {/* SI L'USUARI ÉS ADMINISTRADOR (admin === 1) MOSTRA EL FRONT I EL BACK, SI NO HO ÉS (admin === 0) NOMÉS MOSTRA EL FRONT */}
                {sessionStorage.getItem("admin") !== 0 ?
                  <><NavLink className="nav-link" to="/comentaris">Comentaris</NavLink>
                    <NavLink className="nav-link" to="/fotos">Fotos</NavLink>
                    <NavLink className="nav-link" to="/idiomes">Idiomes</NavLink>
                    <NavLink className="nav-link" to="/restaurants_serveis">Restaurants_Serveis</NavLink>
                    <NavLink className="nav-link" to="/restaurants_back">Restaurants_Back</NavLink>
                    <NavLink className="nav-link" to="/serveis">Serveis</NavLink>
                    <NavLink className="nav-link" to="/tipus">Tipus</NavLink>
                    <NavLink className="nav-link" to="/traduccions">Traduccions</NavLink>
                    <NavLink className="nav-link" to="/usuaris">Usuaris</NavLink>
                    <NavLink className="nav-link" to="/valoracions">Valoracions</NavLink>
                  </>
                  : console.log(sessionStorage.getItem("admin"))}
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Inici />} />
            <Route path="/comentaris" element={<Comentaris />} />
            <Route path="/restaurants" element={<RestaurantsFront />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/foto/:id_foto" element={<CridaFotos />} />
            <Route path="/idiomes" element={<Idiomes />} />
            <Route path="/idioma/:id_idioma" element={<CridaIdioma />} />
            <Route path="/restaurants_serveis" element={<RestaurantServeis />} />
            <Route path="/restaurants_serveis/:id_obra" element={<CridaRestaurantServei />} />
            <Route path="/restaurants_back" element={<Restaurants />} />
            <Route path="/restaurant/:id_restaurant" element={<CridaRestaurant />} />
            <Route path="/serveis" element={<Serveis />} />
            <Route path="/servei/:id_servei" element={<CridaServei />} />
            <Route path="/tipus" element={<Tipus />} />
            <Route path="/tipus/:id_tipus" element={<CridaTipus />} />
            <Route path="/traduccions" element={<Traduccions />} />
            <Route path="/traduccio/:id_traduccio" element={<Traduccio />} />
            <Route path="/valoracions" element={<Valoracions />} />
            <Route path="/usuaris" element={<Usuaris />} />
            <Route path="/usuari/:id_usuari" element={<CridaUsuari />} />
            {/* <Route path="/" element={<CarouselFotos />} />
            <Route path="/perfilUsuari" element={<PerfilUsuari />} />
            <Route path="/explora" element={<Explora />} />
            <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </BrowserRouter></>
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

function CridaUsuari() {
  let params = useParams();
  return <Usuari id_usuari={params.id_usuari} />
}

function CridaRestaurantServei() {
  let params = useParams();
  return <RestaurantServei id_restaurant={params.id_restaurant} />
}

function CridaFotos() {
  let params = useParams();
  return <Foto id_foto={params.id_foto} />
}

function prova() {
  window.location.assign("/restaurants");
}

// if (sessionStorage.getItem("token") === "" || sessionStorage.getItem("token") === null) {
//   document.getElementById("bLogin").style.display = "block";
// } else if (sessionStorage.getItem("token") !== "" || sessionStorage.getItem("token") !== null) {
//   document.getElementById("bPerfil").style.display = "block";
// }

console.log("AQUÍ SALE EL TOKEN ---> " + sessionStorage.getItem("token"));