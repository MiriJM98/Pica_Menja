import axios from "axios";
import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ScrollToTop from "./ScrollToTop";
import traduccions from "./traduccions.json";

export default class RestaurantFront extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_restaurant: "",
            nom: "",
            ubicacio: "",
            telefon: "",
            pagina_web: "",
            descripcio_ca: "",
            descripcio_es: "",
            descripcio_en: "",
            descripcio_de: "",
            imatge: "",
            id_tipus: "",
            carta: "",
            horari_ca: "",
            horari_es: "",
            horari_en: "",
            horari_de: "",
            rang_preus: "",
            iframe: "",
            fotos: [],
            comentaris: [],
            valoracio_global: "",
            puntuacio: -1,
            id_usuari: -1,
            foto_perfil: [],
            nom_usuari: [],
            valoracions: [],
            valoracio_usuari: [],
            serveis: [],
            valoracioRestaurant: -1,
            comentariRestaurant: "",
        };
    }

    componentDidMount() {
        this.descarregaUsuari();
        if (this.props.id_restaurant !== -1) {
            this.descarregaRestaurant(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1) {
            this.mostraValoracioGlobal(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1 && sessionStorage.getItem("id_idioma") === "1") {
            this.mostraServeisCa(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1 && sessionStorage.getItem("id_idioma") === "2") {
            this.mostraServeisEs(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1 && sessionStorage.getItem("id_idioma") === "3") {
            this.mostraServeisEn(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1 && sessionStorage.getItem("id_idioma") === "4") {
            this.mostraServeisDe(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1) {
            this.mostraValoracions(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1) {
            this.fotosRestaurant(this.props.id_restaurant);
        }
    }

    // FUNCI?? PER RECARREGAR EL COMPONENT
    handleRefresh = () => {
        this.setState({});
    };

    descarregaUsuari = () => {
        if (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null) {
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
                    if (error.response.status === 401 || error.response.status === 403) {
                        sessionStorage.setItem("token", "");
                        sessionStorage.setItem("admin", "");
                        sessionStorage.setItem("id_usuari", "");
                        alert(traduccions[sessionStorage.getItem("id_idioma")][0].expirat);
                        window.location.assign("/");
                        this.handleRefresh();
                    }
                })
        }
    }

    descarregaRestaurant = (id_restaurant) => {
        const mostrador = document.getElementById("contingut");
        const divIframe = document.getElementById("iframeDiv");
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/" + id_restaurant)
            .then((response) => {
                this.setState({
                    id_restaurant: response.data.id_restaurant,
                    nom: response.data.nom,
                    ubicacio: response.data.ubicacio,
                    telefon: response.data.telefon,
                    pagina_web: response.data.pagina_web,
                    descripcio_ca: response.data.descripcio_ca,
                    descripcio_es: response.data.descripcio_es,
                    descripcio_en: response.data.descripcio_en,
                    descripcio_de: response.data.descripcio_de,
                    imatge: response.data.imatge,
                    carta: response.data.carta,
                    id_tipus: response.data.id_tipus,
                    horari_ca: response.data.horari_ca,
                    horari_es: response.data.horari_es,
                    horari_en: response.data.horari_en,
                    horari_de: response.data.horari_de,
                    rang_preus: response.data.rang_preus,
                    iframe: response.data.iframe,
                });
                // BUIDAM EL CONTINGUT
                mostrador.innerHTML = "";
                divIframe.innerHTML = "";
                // ESTRUCTURA
                // TAULA
                let taula = document.createElement("table");
                taula.setAttribute("id", "taulaRestaurant");
                // TR'S
                let trDescripcio = document.createElement("tr");
                let trTelefon = document.createElement("tr");
                let trHorari = document.createElement("tr");
                let trWeb = document.createElement("tr");
                let trUbicacio = document.createElement("tr");
                let trTipus = document.createElement("tr");
                let trRang = document.createElement("tr");
                let pIframe = document.createElement("div");
                let trCarta = document.createElement("tr");
                // TD'S
                let td_descripcio = document.createElement("td");
                let td_imatge_desc = document.createElement("td");
                let td_telefon = document.createElement("td");
                let td_imatge_tel = document.createElement("td");
                let td_horari = document.createElement("td");
                let td_imatge_horari = document.createElement("td");
                let td_pagina_web = document.createElement("td");
                let td_imatge_web = document.createElement("td");
                let td_ubicacio = document.createElement("td");
                let td_imatge_ubic = document.createElement("td");
                let td_tipus = document.createElement("td");
                let td_imatge_tipus = document.createElement("td");
                let td_rang = document.createElement("td");
                let td_imatge_rang = document.createElement("td");
                let td_carta = document.createElement("td");
                // CONTINGUT
                let descripcio = "";
                let horari = "";
                let tipus = "";
                // MIRAM QUIN ??S L'IDIOMA DE LA P??GINA I MOSTRAM LA INFORMACI?? EN AQUEST IDIOMA
                if (sessionStorage.getItem("id_idioma") === "1") {
                    descripcio = document.createTextNode(response.data.descripcio_ca);
                    horari = document.createTextNode(response.data.horari_ca);
                    tipus = document.createTextNode(response.data.tipus.tipus_ca);
                }
                if (sessionStorage.getItem("id_idioma") === "2") {
                    descripcio = document.createTextNode(response.data.descripcio_es);
                    horari = document.createTextNode(response.data.horari_es);
                    tipus = document.createTextNode(response.data.tipus.tipus_es);
                }
                if (sessionStorage.getItem("id_idioma") === "3") {
                    descripcio = document.createTextNode(response.data.descripcio_en);
                    horari = document.createTextNode(response.data.horari_en);
                    tipus = document.createTextNode(response.data.tipus.tipus_en);
                }
                if (sessionStorage.getItem("id_idioma") === "4") {
                    descripcio = document.createTextNode(response.data.descripcio_de);
                    horari = document.createTextNode(response.data.horari_de);
                    tipus = document.createTextNode(response.data.tipus.tipus_de);
                }
                let imatgeDesc = document.createElement("img");
                let telefon = document.createTextNode(response.data.telefon);
                let imatgeTel = document.createElement("img");
                let imatgeHorari = document.createElement("img");
                let pagina_web = document.createElement("a");
                pagina_web.text = response.data.pagina_web;
                pagina_web.href = response.data.pagina_web;
                let imatgeWeb = document.createElement("img");
                let ubicacio = document.createTextNode(response.data.ubicacio);
                let imatgeUbi = document.createElement("img");
                let imatgeTipus = document.createElement("img");
                let rang = document.createTextNode(response.data.rang_preus);
                let imatgeRang = document.createElement("img");
                let iframe = document.createElement("iframe");
                let carta = document.createElement("img");
                let link = document.createElement("a");
                link.href = response.data.carta;
                // PROPIETATS DE LES IMATGES
                imatgeDesc.src = "/desc.webp";
                imatgeDesc.setAttribute("width", "35px");
                imatgeDesc.setAttribute("id", "fotosResponsive");
                imatgeDesc.setAttribute("alt", "Descripci??");
                imatgeTel.src = "/tel.webp";
                imatgeTel.setAttribute("width", "30px");
                imatgeTel.setAttribute("id", "fotosResponsive");
                imatgeTel.setAttribute("alt", "Tel??fon");
                imatgeHorari.src = "/horari.webp";
                imatgeHorari.setAttribute("width", "35px");
                imatgeHorari.setAttribute("id", "fotosResponsive");
                imatgeHorari.setAttribute("alt", "Horari");
                imatgeWeb.src = "/web.webp";
                imatgeWeb.setAttribute("width", "35px");
                imatgeWeb.setAttribute("id", "fotosResponsive");
                imatgeWeb.setAttribute("alt", "Web");
                imatgeUbi.src = "/ubi.webp";
                imatgeUbi.setAttribute("width", "35px");
                imatgeUbi.setAttribute("id", "fotosResponsive");
                imatgeUbi.setAttribute("alt", "Ubicaci??");
                imatgeTipus.src = "/tipus.webp";
                imatgeTipus.setAttribute("width", "35px");
                imatgeTipus.setAttribute("id", "fotosResponsive");
                imatgeTipus.setAttribute("alt", "Tipus");
                imatgeRang.src = "/euro.webp";
                imatgeRang.setAttribute("width", "35px");
                imatgeRang.setAttribute("id", "fotosResponsive");
                imatgeRang.setAttribute("alt", "Rang");
                carta.src = '/menu.webp';
                carta.setAttribute("alt", "Menu");
                carta.setAttribute("id", "fotosResponsive");
                link.appendChild(carta);
                iframe.setAttribute("src", response.data.iframe);
                iframe.setAttribute("width", "50%");
                iframe.setAttribute("title", "Map");
                iframe.setAttribute("height", "300px");
                // FICAM TOT ON TOCA
                td_descripcio.appendChild(descripcio);
                td_imatge_desc.appendChild(imatgeDesc);
                td_telefon.appendChild(telefon);
                td_imatge_tel.appendChild(imatgeTel);
                td_horari.appendChild(horari);
                td_imatge_horari.appendChild(imatgeHorari);
                td_pagina_web.appendChild(pagina_web);
                td_imatge_web.appendChild(imatgeWeb);
                td_ubicacio.appendChild(ubicacio);
                td_imatge_ubic.appendChild(imatgeUbi);
                td_imatge_tipus.appendChild(imatgeTipus);
                td_tipus.appendChild(tipus);
                td_imatge_rang.appendChild(imatgeRang);
                td_rang.appendChild(rang);
                td_carta.appendChild(link);
                pIframe.appendChild(iframe);
                // FICAM LES TD'S DINS LES TR'S
                trDescripcio.appendChild(td_imatge_desc);
                trDescripcio.appendChild(td_descripcio);
                trTelefon.appendChild(td_imatge_tel);
                trTelefon.appendChild(td_telefon);
                trHorari.appendChild(td_imatge_horari);
                trHorari.appendChild(td_horari);
                trWeb.appendChild(td_imatge_web);
                trWeb.appendChild(td_pagina_web);
                trUbicacio.appendChild(td_imatge_ubic);
                trUbicacio.appendChild(td_ubicacio);
                trTipus.appendChild(td_imatge_tipus);
                trTipus.appendChild(td_tipus);
                trRang.appendChild(td_imatge_rang);
                trRang.appendChild(td_rang);
                trCarta.appendChild(td_carta);
                // FICAM LES TR'S DINS LA TAULA
                taula.appendChild(trDescripcio);
                taula.appendChild(trTelefon);
                taula.appendChild(trHorari);
                taula.appendChild(trWeb);
                taula.appendChild(trUbicacio);
                taula.appendChild(trTipus);
                taula.appendChild(trRang);
                taula.appendChild(trCarta);
                document.getElementById("contingut").appendChild(taula);
                document.getElementById("iframeDiv").appendChild(pIframe);
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            })
    }

    fotosRestaurant = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/fotos/restaurant/" + id_restaurant)
            .then((response) => {
                // console.log(response.data.length);
                // console.log(this.state.id_restaurant);
                let contador = response.data.length - 3;
                this.setState({
                    fotos: response.data,
                });
                let taula = document.createElement("table");
                taula.setAttribute("id", "taulaGaleria");
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                td.setAttribute("id", "tdGaleria");
                let divCarousel = document.getElementById("carouselRestaurant");
                divCarousel.innerHTML = "";
                response.data.forEach(foto => {
                    if (contador < 6) {
                        let imatge = document.createElement("img");
                        imatge.setAttribute("alt", "Foto");
                        imatge.setAttribute("src", foto.foto);
                        imatge.setAttribute("height", 300);
                        imatge.setAttribute("id", "imatgeGaleria");
                        td.appendChild(imatge);
                        tr.appendChild(td);
                        taula.appendChild(tr);
                        document.getElementById("carouselRestaurant").appendChild(taula);
                    }
                    contador++;
                }
                );
                let contador2 = response.data.length - 3;
                let tr2 = document.createElement("tr");
                let td2 = document.createElement("td");
                td2.setAttribute("id", "tdGaleria");
                response.data.forEach(foto => {
                    if (contador2 > 5) {
                        let imatge = document.createElement("img");
                        imatge.setAttribute("alt", "Foto");
                        imatge.setAttribute("src", foto.foto);
                        imatge.setAttribute("height", 300);
                        imatge.setAttribute("id", "imatgeGaleria");
                        td2.appendChild(imatge);
                        tr2.appendChild(td2);
                        taula.appendChild(tr2);
                        document.getElementById("carouselRestaurant").appendChild(taula);
                    }
                    contador2++;
                }
                );
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            })
    }

    mostraServeisCa = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis/serveisCa/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    serveis: response.data
                });
                const div = document.getElementById("serveisRes");
                div.innerHTML = "";
                response.data.forEach(servei => {
                    let paragraf = document.createElement("p");
                    paragraf.setAttribute("id", "serveiUpperCase");
                    let serv = document.createTextNode(servei.servei);
                    paragraf.appendChild(serv);
                    div.appendChild(paragraf);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    mostraServeisEs = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis/serveisEs/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    serveis: response.data
                });
                const div = document.getElementById("serveisRes");
                div.innerHTML = "";
                response.data.forEach(servei => {
                    let paragraf = document.createElement("p");
                    paragraf.setAttribute("id", "serveiUpperCase");
                    let serv = document.createTextNode(servei.servei);
                    paragraf.appendChild(serv);
                    div.appendChild(paragraf);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    mostraServeisEn = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis/serveisEn/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    serveis: response.data
                });
                const div = document.getElementById("serveisRes");
                div.innerHTML = "";
                response.data.forEach(servei => {
                    let paragraf = document.createElement("p");
                    paragraf.setAttribute("id", "serveiUpperCase");
                    let serv = document.createTextNode(servei.servei);
                    paragraf.appendChild(serv);
                    div.appendChild(paragraf);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    mostraServeisDe = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis/serveisDe/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    serveis: response.data
                });
                const div = document.getElementById("serveisRes");
                div.innerHTML = "";
                response.data.forEach(servei => {
                    let paragraf = document.createElement("p");
                    paragraf.setAttribute("id", "serveiUpperCase");
                    let serv = document.createTextNode(servei.servei);
                    paragraf.appendChild(serv);
                    div.appendChild(paragraf);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }


    mostraValoracioGlobal = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/valoracions/mitjana/restaurant/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    valoracio_global: response.data
                });
                response.data.forEach(nota => {
                    // Fem parseFloat de la valoraci??
                    let parseat = parseFloat(nota.valoracio);
                    this.setState({
                        puntuacio: parseat
                    });
                    let puntuacio = document.createElement("p");
                    let valoracio = document.createTextNode(parseat);
                    puntuacio.setAttribute("font-size", "20pt");
                    puntuacio.appendChild(valoracio);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    mostraValoracions = (id_restaurant) => {
        axios.get("https://picamenja.com/PicaMenja/public/api/valoracions/restaurant/" + id_restaurant)
            .then((response) => {
                // console.log(response);
                this.setState({
                    valoracions: response.data
                });
                const div = document.getElementById("valoracionsUsuaris");
                div.innerHTML = "";
                let taula = document.createElement("table");
                response.data.forEach(valoracio => {
                    // TR'S I TD'S
                    let trValoracions = document.createElement("tr");
                    trValoracions.setAttribute("id", "trValoracions");
                    let trComentaris = document.createElement("tr");
                    let tdFotoPerfil = document.createElement("td");
                    let tdUsuari = document.createElement("td");
                    let tdEstrella = document.createElement("td");
                    let tdData = document.createElement("td");
                    let tdComentari = document.createElement("td");
                    // CONTINGUT
                    let fotoPerfil = document.createElement("img");
                    let usuari = document.createTextNode(valoracio.usuari);
                    let data = document.createTextNode(valoracio.data);
                    let parseat = parseFloat(valoracio.valoracio);
                    this.setState({
                        valoracio_usuari: parseat
                    });
                    let estrelles = document.createTextNode(parseat + "/5");
                    // PROPIETATS DE LA IMATGE
                    if (valoracio.foto_perfil !== "" && valoracio.foto_perfil !== "null" && valoracio.foto_perfil !== null) {
                        fotoPerfil.setAttribute("src", valoracio.foto_perfil);
                    } else {
                        fotoPerfil.setAttribute("src", "/userpink.webp");
                    }
                    fotoPerfil.setAttribute("alt", "Foto Usuari");
                    fotoPerfil.setAttribute("id", "fotoValUsuaris");
                    tdComentari.setAttribute("colspan", "10");
                    // FICAM ON TOCA
                    tdFotoPerfil.appendChild(fotoPerfil);
                    tdUsuari.appendChild(usuari);
                    tdEstrella.appendChild(estrelles);
                    tdData.appendChild(data);
                    let comentari = "";
                    if (valoracio.comentari !== null) {
                        comentari = document.createTextNode(valoracio.comentari);
                    } else {
                        comentari = document.createTextNode("");
                    }
                    tdComentari.setAttribute("id", "comentariNoBold");
                    tdComentari.appendChild(comentari);
                    trValoracions.appendChild(tdFotoPerfil);
                    trValoracions.appendChild(tdUsuari);
                    trValoracions.appendChild(tdEstrella);
                    trValoracions.appendChild(tdData);
                    trComentaris.appendChild(tdComentari);
                    taula.appendChild(trValoracions);
                    taula.appendChild(trComentaris);
                    div.appendChild(taula);
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    crearValoracio = () => {
        let formData = new URLSearchParams();
        formData.append("id_usuari", sessionStorage.getItem("id_usuari"));
        formData.append("id_restaurant", this.state.id_restaurant);
        formData.append("valoracio", this.state.valoracioRestaurant);
        formData.append("comentari", this.state.comentariRestaurant);
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/valoracions", formData, config)
            .then((response) => {
                // console.log(response);
                this.descarregaRestaurant(this.props.id_restaurant);
                alert(traduccions[sessionStorage.getItem("id_idioma")][0].insertValoracio);
                window.location.reload();
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeValoracio = (v) => {
        this.setState({ valoracioRestaurant: v });
    };

    tornarEnrere = () => {
        window.location.assign("/restaurants");
        this.handleRefresh();
    }

    render() {
        return (
            <div id="frontRestaurant" className="row justify-content-center">
                <div id="headerRestaurant">
                    <button type="button" className="btn btn-link" onClick={this.tornarEnrere} aria-label="Tornar">
                        <Image src={process.env.PUBLIC_URL + '/tornar.png'} width="35px" height="35" alt="Tornar"></Image>
                    </button>
                </div>
                <div id="headerRestaurant2">
                    <h1 className="row justify-content-center mt-3">{this.state.nom}</h1>
                </div>
                <div id="carouselRestaurant"></div>
                <div id="contingut"></div>
                <h2 id="h2Serveis" className="mt-5">{traduccions[sessionStorage.getItem("id_idioma")][0].serveis}</h2>
                <div id="serveisRes"></div>
                <h2 id="h2Serveis" className="mt-5">{traduccions[sessionStorage.getItem("id_idioma")][0].valocomen}</h2>
                <div id="valoracionsUsuaris"></div>
                <div id="divValoracions">
                    <h3 className="row justify-content-center mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].valoracio}</h3>
                    {sessionStorage.getItem("token") === "" || sessionStorage.getItem("token") === null ?
                        <div id="missatgePerValorar">
                            <p>{traduccions[sessionStorage.getItem("id_idioma")][0].registreValora}</p>
                        </div>
                        : console.log()}
                    <div id="estrelles">
                    </div>
                    {this.state.puntuacio !== -1 ?
                        <Rating
                            onClick={this.mostraValoracio}
                            ratingValue={this.state.puntuacio * 20}
                            size={40}
                            label
                            transition
                            fillColor='orange'
                            emptyColor='gray'
                            readonly="true"
                        />
                        : console.log()}

                    {this.state.puntuacio === -1 ?
                        <>
                            <p id="noValorat">{traduccions[sessionStorage.getItem("id_idioma")][0].novalorat}</p>
                            <Rating
                                onClick={this.mostraValoracio}
                                ratingValue={0}
                                readonly="true"
                            />
                        </>
                        : console.log()}

                </div>
                {sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null ?
                    <div id="crearValoracio">
                        <div id="estilValoracio">
                            <h4 className="row justify-content-center mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].creaValoracio}</h4>
                            <div>
                                <h5>{traduccions[sessionStorage.getItem("id_idioma")][0].puntuacioRestaurant}
                                    <select className="ms-2" name="valoracioRestaurant" onChange={this.onChange}>
                                        <option>{traduccions[sessionStorage.getItem("id_idioma")][0].select}</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </h5>
                            </div>
                            <p>{traduccions[sessionStorage.getItem("id_idioma")][0].deixaComentari}</p>
                            <p>
                                <textarea id="textarea" rows="4" cols="60" placeholder={traduccions[sessionStorage.getItem("id_idioma")][0].placeholderComent} name="comentariRestaurant" onChange={this.onChange}></textarea>
                            </p>
                            {this.state.valoracioRestaurant !== -1 ?
                                <p><button className="btn btn-primary btn-lg" onClick={this.crearValoracio}>{traduccions[sessionStorage.getItem("id_idioma")][0].valorar}</button></p>
                                : console.log()}
                        </div>
                    </div>
                    : console.log()}
                <div id="iframeDiv" className="mt-5"></div>
                <ScrollToTop />
            </div>
        )
    }
}