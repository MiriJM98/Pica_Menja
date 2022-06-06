import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Link from '@mui/material/Link';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Foto from "./Foto";
import Fotos from "./Fotos";
import Idiomes from "./Idiomes";
import Inici from "./Inici";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";
import RestaurantServei from "./RestaurantServei";
import RestaurantsFront from "./RestaurantsFront";
import RestaurantServeis from "./RestaurantsServeis";
import Servei from "./Servei";
import Login from "./Login";
import Serveis from "./Serveis";
import Tipu from "./Tipu";
import Tipus from "./Tipus";
import Usuari from "./Usuari";
import Usuaris from "./Usuaris";
import Valoracions from "./Valoracions";
import QuiSom from "./QuiSom";
import Suggeriments from "./Suggeriments";
import PerfilUsuari from "./PerfilUsuari";
import Registre from "./Registre";
import axios from "axios";
import RestaurantFront from "./RestaurantFront";
import traduccions from './traduccions.json';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_usuari: "",
      nom_usuari: "",
      foto_perfil: "",
    }
  }

  // SI UN USUARI HA INICIAT SESSIÓ DESCARREGAM LES SEVES DADES PER MOSTRAR LA SEVA FOTO DE PERFIL
  componentDidMount() {
    if (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null) {
      this.handleRefresh();
      this.descarrega();
    }
    this.carregaIdioma();
  }

  descarrega = () => {
    const config = {
      headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
    };
    const usuari = sessionStorage.getItem("id_usuari");
    axios.get('https://picamenja.com/PicaMenja/public/api/usuaris/' + usuari, config)
      .then(response => {
        //console.log(response);
        this.setState({
          id_usuari: response.data.id_usuari,
          nom_usuari: response.data.nom_usuari,
          foto_perfil: response.data.foto_perfil,
        });
      })
      .catch(function (error) {
        // Mostrar error
        console.log(error);
        if (error.response.status === 401) {
          sessionStorage.setItem("token", "");
          sessionStorage.setItem("admin", "");
          sessionStorage.setItem("id_usuari", "");
          window.location.assign("/");
          alert(traduccions[sessionStorage.getItem("id_idioma")][0].expirat);
        }
      })
  }

  carregaIdioma = () => {
    this.handleRefresh();
    // Català idioma per defecte
    axios.get("https://picamenja.com/PicaMenja/public/api/idiomes/" + sessionStorage.getItem("id_idioma"))
      .then(response => {
        // console.log(response);
        sessionStorage.setItem("id_idioma", response.data.id_idioma);
      })
      .catch(function (error) {
        // Mostrar error
        console.log(error);
      })
  }

  onChangeIdioma = (e) => {
    sessionStorage.setItem("id_idioma", e.target.value);
    this.handleRefresh();
    console.log(sessionStorage.getItem("id_idioma"));
  }

  // FUNCIÓ PER ANAR A INICIAR SESSIÓ
  loginFunction() {
    window.location.assign("/login");
  }

  // FUNCIÓ PER ANAR A CREAR UN NOU COMPTE D'USUARI
  registreFunction() {
    window.location.assign("/registre");
  }

  // FUNCIÓ PER RECARREGAR EL COMPONENT
  handleRefresh = () => {
    this.setState({});
  };

  // FUNCIÓ PER ANAR AL PERFIL DE L'USUARI
  perfilFunction() {
    window.location.assign("/perfilUsuari");
  }

  // FUNCIÓ PER MOSTRAR I OCULTAR EL MENÚ D'USUARI
  desplegaMenu() {
    if (document.getElementById("dropdown-content").style.display === "none") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  }

  // FUNCIÓ PER FER LOGOUT DE L'APLICACIÓ
  logout() {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("id_usuari", "");
    sessionStorage.setItem("admin", "");
    window.location.assign("/");
  }

  render() {
    return (
      <>
        <header id="header">
          {/* DINS AQUEST CONTENEDOR TENIM EL HEADER DE L'APLICACIÓ, FORMAT PER DUES SECCIONS: 
          UN SELECT PER SELECCIONAR L'IDIOMA I OPCIONS PER FER LOGIN O REGISTRAR-SE */}
          <Container>
            <div className="idiomes">
              <select id="selectIdioma" className="ms-2 mt-3" onChange={this.onChangeIdioma} value={sessionStorage.getItem("id_idioma")}>
                <option value="1">Català</option>
                <option value="2">Español</option>
                <option value="3">English</option>
                <option value="4">Deutsch</option>
              </select>
              {sessionStorage.getItem("id_idioma") === "1" ?
                <Image src={process.env.PUBLIC_URL + '/catalana.jpg'}
                  width="60" height="47" id="fotoIdioma" title={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes}
                  alt={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes} className="ms-2 mt-3"
                />
                : console.log()}
              {sessionStorage.getItem("id_idioma") === "2" ?
                <Image src={process.env.PUBLIC_URL + '/spain.png'}
                  width="60" height="47" id="fotoIdioma" title={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes}
                  alt={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes} className="ms-2 mt-3"
                />
                : console.log()}
              {sessionStorage.getItem("id_idioma") === "3" ?
                <Image src={process.env.PUBLIC_URL + '/inglesa.jpg'}
                  width="60" height="47" id="fotoIdioma" title={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes}
                  alt={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes} className="ms-2 mt-3"
                />
                : console.log()}
              {sessionStorage.getItem("id_idioma") === "4" ?
                <Image src={process.env.PUBLIC_URL + '/alemana.jpg'}
                  width="60" height="47" id="fotoIdioma" title={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes}
                  alt={traduccions[sessionStorage.getItem("id_idioma")][0].idiomes} className="ms-2 mt-3"
                />
                : console.log()}

              {/* SI L'USUARI NO HA FET LOGIN A L'APLICACIÓ SURTEN LES OPCIONS PER FER LOGIN O REGISTRAR-SE */}
              {sessionStorage.getItem("token") === "" || sessionStorage.getItem("token") === null ?
                <>
                  <button className="ms-3 mt-3 btn btn-info btn-lg mb-2" aria-label="Botó Login" onClick={this.loginFunction}>{traduccions[sessionStorage.getItem("id_idioma")][0].iniciasessio}</button>
                  <button className="ms-3 mt-3 btn btn-warning btn-lg mb-2" aria-label="Botó Sing In" onClick={this.registreFunction}>{traduccions[sessionStorage.getItem("id_idioma")][0].registre}</button>
                </>
                : console.log()}

              {/* SI L'USUARI HA FET LOGIN A L'APLICACIÓ, SURT LA SEVA IMATGE DE PERFIL (SI EN TÉ) I OPCIONS PER VEURE I MODIFICAR EL SEU PERFIL O PER FER LOGOUT */}
              {sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null ?
                <>
                  <div className="dropdown">
                    <button type="button" className="dropbtn" aria-label="Botó Perfil" onClick={this.desplegaMenu}>

                      {/* L'USUARI TÉ FOTO DE PERFIL */}
                      {this.state.foto_perfil !== "" && this.state.foto_perfil !== "null" && this.state.foto_perfil !== null ?
                        <>
                          <Image src={this.state.foto_perfil} style={{ width: 50, height: 50, borderRadius: 400 / 2 }} alt="Foto Perfil" />
                        </>
                        : console.log()}

                      {/* L'USUARI NO TÉ FOTO DE PERFIL */}
                      {this.state.foto_perfil === "null" || this.state.foto_perfil === null ?
                        <>
                          <Image src={process.env.PUBLIC_URL + "/userpink.png"} alt="Foto Defecte" style={{ width: 50, height: 50, borderRadius: 400 / 2 }} />
                        </>
                        : console.log()}
                    </button>
                    {/* BOTONS PER VEURE EL PERFIL O PER FER LOGOUT */}
                    <div className="dropdown-content" id="dropdown-content" style={{ display: 'none' }}>
                      <button className="ms-3  btn btn-dark btn-lg mb-2" tabIndex={"0"} onClick={this.perfilFunction}>{traduccions[sessionStorage.getItem("id_idioma")][0].perfil}</button>
                      <button className="ms-2 btn btn-outline-danger btn-lg mb-2" onClick={this.logout}>{traduccions[sessionStorage.getItem("id_idioma")][0].tancasessio}</button>
                    </div>
                  </div>
                </>
                : console.log()}
            </div>
          </Container>

          <Container>
            <>
              <div className="parent">
                {/* DINS AQUEST CONTENEDOR TROBAM UNA FOTO AMB EL NOM DE L'APLICACIÓ */}
                {/* SI NO ENS TROBAM A LA PÀGINA D'INICI (/) LA FOTO NOMÉS MOSTRARÀ EL NOM DE L'APLICACIÓ */}
                {window.location.pathname !== "/" ?
                  <>
                    <Image src={process.env.PUBLIC_URL + '/picamenja.png'}
                      rel="preload"
                      alt="PICA & MENJA"
                      title="PICA & MENJA"
                      id="imatges"
                      width="494px"
                      height="112px"
                    />
                  </>
                  : console.log()}

                {/* SI ENS TROBAM A LA PÀGINA D'INICI (/) LA FOTO, A MÉS DEL NOM DE L'APLICACIÓ, TAMBÉ MOSTRA EL LOGOTIP */}
                {window.location.pathname === "/" ?
                  <>
                    <Image src={process.env.PUBLIC_URL + '/logoweb.png'}
                      rel="preload"
                      alt="PICA & MENJA"
                      title="PICA & MENJA"
                      id="imatges"
                    />
                  </>
                  : console.log()}
              </div>
            </>
          </Container>
        </header>

        <BrowserRouter>
          {/* SECCIÓ COMPOSTA PER EL MENÚ I RUTES DE L'APLICACIÓ */}
          <Navbar
            bg="dark"
            className="color-nav"
            variant="dark"
            expand="lg"
          >
            <Container>
              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].inici}</NavLink>
                {/* {console.log(traduccions[0])} */}
                <NavLink className="nav-link" to="/restaurants" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].restaurants}</NavLink>
                <NavLink className="nav-link" to="/quisom" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].quisom}</NavLink>
                {/* NOMÉS ELS USUARIS QUE HAGIN FET LOGIN PODEN ENVIAR SUGGERÈNCIES */}
                {sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null ?
                  <NavLink className="nav-link" to="/suggeriments" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].suggeriments}</NavLink>
                  : console.log()}
                {/* SI L'USUARI ÉS ADMINISTRADOR (admin == 1) MOSTRA EL FRONT I EL BACK, SI NO HO ÉS (admin !== 1) NOMÉS MOSTRA EL FRONT */}
                {sessionStorage.getItem("admin") === "1" ?
                  <>
                    <NavLink className="nav-link" to="/fotos" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].fotos}</NavLink>
                    <NavLink className="nav-link" to="/idiomes" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].idiomes}</NavLink>
                    <NavLink className="nav-link" to="/restaurants_serveis" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].restServeis}</NavLink>
                    <NavLink className="nav-link" to="/restaurants_back" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].restBack}</NavLink>
                    <NavLink className="nav-link" to="/serveis" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].serveis}</NavLink>
                    <NavLink className="nav-link" to="/tipus" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].tipus}</NavLink>
                    <NavLink className="nav-link" to="/usuaris" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].usuaris}</NavLink>
                    <NavLink className="nav-link" to="/valoracions" onClick={this.handleRefresh}>{traduccions[sessionStorage.getItem("id_idioma")][0].valoracionsMenu}</NavLink>
                  </>
                  : console.log()}
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            {/* RUTES DE FRONTEND */}
            <Route path="/" element={<Inici />} />
            <Route path="/quisom" element={<QuiSom />} />
            <Route path="/restaurants" element={<RestaurantsFront />} />
            <Route path="/restaurantFront/:id_restaurant" element={<CridaRestaurantFront />} />
            <Route path="/perfilUsuari" element={<PerfilUsuari />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registre" element={<Registre />} />
            {/* NOMÉS ELS USUARIS QUE HAGIN FET LOGIN PODEN ENVIAR SUGGERÈNCIES */}
            {sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null ?
              <Route path="/suggeriments" element={<Suggeriments />} />
              : console.log()}
            {/* RUTES DE BACKEND */}
            {sessionStorage.getItem("admin") === "1" ?
              <>
                <Route path="/fotos" element={<Fotos />} />
                <Route path="/foto/:id_foto" element={<CridaFotos />} />
                <Route path="/idiomes" element={<Idiomes />} />
                <Route path="/restaurants_serveis" element={<RestaurantServeis />} />
                <Route path="/restaurants_serveis/:id_obra" element={<CridaRestaurantServei />} />
                <Route path="/restaurants_back" element={<Restaurants />} />
                <Route path="/restaurant/:id_restaurant" element={<CridaRestaurant />} />
                <Route path="/serveis" element={<Serveis />} />
                <Route path="/servei/:id_servei" element={<CridaServei />} />
                <Route path="/tipus" element={<Tipus />} />
                <Route path="/tipus/:id_tipus" element={<CridaTipus />} />
                <Route path="/valoracions" element={<Valoracions />} />
                <Route path="/usuaris" element={<Usuaris />} />
                <Route path="/usuari/:id_usuari" element={<CridaUsuari />} />
              </>
              : console.log()}

            {/* <Route path="/" element={<CarouselFotos />} />
            <Route path="/explora" element={<Explora />} /> */}
          </Routes>
        </BrowserRouter>
        <footer id="footer">
          {/* FOOTER DE L'APLICACIÓ */}
          {'Copyright © '}
          <Link color="inherit" href="/">
            Pica & Menja
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
          <div>
            <ul>
              <li><a href="https://www.facebook.com/Pica-Menja-104063332311646" tabIndex={"0"}>
                <Image src={process.env.PUBLIC_URL + '/fotof.png'} alt="Logo de Facebook"
                  title="Facebook" width="30" height="30" /></a></li>
              <li><a href="https://www.instagram.com/pica_menja/" tabIndex={"0"}>
                <Image src={process.env.PUBLIC_URL + '/fotoi.png'}
                  alt="Logo d'Instagram" title="Instagram" width="30" height="30" /></a></li>
              <li><a href="https://twitter.com/MenjaPica" tabIndex={"0"}>
                <Image src={process.env.PUBLIC_URL + '/fotot.png'}
                  alt="Logo de Twitter" title="Twitter" width="30" height="30" /></a></li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}


function CridaRestaurant() {
  let params = useParams();
  return <Restaurant id_restaurant={params.id_restaurant} />
}

function CridaRestaurantFront() {
  let params = useParams();
  return <RestaurantFront id_restaurant={params.id_restaurant} />
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

// console.log("AQUÍ SALE EL TOKEN ---> " + sessionStorage.getItem("token"));
// console.log("AQUÍ SALE EL ADMIN ---> " + sessionStorage.getItem("admin"));
// console.log("AQUÍ SALE EL ID_USUARI --> " + sessionStorage.getItem("id_usuari"));
// console.log("AQUÍ SALE TOKEN VÁLIDO --> " + sessionStorage.getItem("token_valid"));
// console.log("id_idioma --> " + sessionStorage.getItem("id_idioma"));
