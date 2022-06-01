import axios from "axios";
import React, { Component } from "react";
import { Rating } from "react-simple-star-rating";
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
            comentariRestaurant: ""
        };
    }

    componentDidMount() {
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
        // if (this.props.id_restaurant !== -1) {
        //     this.fotosRestaurant(this.props.id_restaurant);
        // }
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
                // MIRAM QUIN ÉS L'IDIOMA DE LA PÀGINA I MOSTRAM LA INFORMACIÓ EN AQUEST IDIOMA
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
                imatgeDesc.src = "/desc.png";
                imatgeDesc.setAttribute("width", "35px");
                imatgeDesc.setAttribute("alt", "Descripció");
                imatgeTel.src = "/tel.png";
                imatgeTel.setAttribute("width", "30px");
                imatgeTel.setAttribute("alt", "Telèfon");
                imatgeHorari.src = "/horari.png";
                imatgeHorari.setAttribute("width", "35px");
                imatgeHorari.setAttribute("alt", "Horari");
                imatgeWeb.src = "/web.png";
                imatgeWeb.setAttribute("width", "35px");
                imatgeWeb.setAttribute("alt", "Web");
                imatgeUbi.src = "/ubi.png";
                imatgeUbi.setAttribute("width", "35px");
                imatgeUbi.setAttribute("alt", "Ubicació");
                imatgeTipus.src = "/tipus.png";
                imatgeTipus.setAttribute("width", "35px");
                imatgeTipus.setAttribute("alt", "Tipus");
                imatgeRang.src = "/euro.png";
                imatgeRang.setAttribute("width", "35px");
                imatgeRang.setAttribute("alt", "Rang");
                carta.src = '/menu.png';
                carta.setAttribute("alt", "Rang");
                link.appendChild(carta);
                iframe.setAttribute("src", this.state.iframe);
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
                console.log(response);
                console.log(this.state.id_restaurant);
                this.setState({
                    fotos: response.data,
                });
                this.state.fotos.forEach(foto => {
                    let carta = document.createElement("div");
                    let h3 = document.createElement("h3");
                    let imatge = document.createElement("img");
                    imatge.setAttribute("src", foto.foto);
                    imatge.setAttribute("width", 300);
                    carta.appendChild(h3);
                    carta.appendChild(imatge);
                    document.getElementById("carouselRestaurant").appendChild(carta);
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
                this.state.serveis.forEach(servei => {
                    let paragraf = document.createElement("p");
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
                this.state.serveis.forEach(servei => {
                    let paragraf = document.createElement("p");
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
                this.state.serveis.forEach(servei => {
                    let paragraf = document.createElement("p");
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
                this.state.serveis.forEach(servei => {
                    let paragraf = document.createElement("p");
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
                // const div = document.getElementById("divValoracions");
                // div.innerHTML = "";
                this.state.valoracio_global.forEach(nota => {
                    // Fem parseFloat de la valoració
                    let parseat = parseFloat(nota.valoracio);
                    this.setState({
                        puntuacio: parseat
                    });
                    let puntuacio = document.createElement("p");
                    let valoracio = document.createTextNode(parseat);
                    puntuacio.setAttribute("font-size", "20pt");
                    puntuacio.appendChild(valoracio);
                    // console.log("TIPO " + typeof parseat);
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
                console.log(response);
                this.setState({
                    valoracions: response.data
                });
                console.log(this.state.valoracions);
                const div = document.getElementById("valoracionsUsuaris");
                div.innerHTML = "";
                let taula = document.createElement("table");
                this.state.valoracions.forEach(valoracio => {
                    // TR'S I TD'S
                    let trValoracions = document.createElement("tr");
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
                    fotoPerfil.setAttribute("src", valoracio.foto_perfil);
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
                console.log(response);
                this.descarregaRestaurant(this.props.id_restaurant);
                alert("Valoració correcta!");
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

    render() {
        return (
            <div id="frontRestaurant" className="row justify-content-center">
                <h1 className="row justify-content-center mt-3">{this.state.nom}</h1>
                <div id="carouselRestaurant"></div>
                <div id="contingut"></div>
                <h2>{traduccions[sessionStorage.getItem("id_idioma")][0].serveis}</h2>
                <div id="serveisRes"></div>
                <h2>{traduccions[sessionStorage.getItem("id_idioma")][0].valocomen}</h2>
                <div id="valoracionsUsuaris"></div>
                <h3 className="row justify-content-center mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].valoracio}</h3>
                <div id="divValoracions"></div>
                <div id="estrelles">
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
                        <h4 className="row justify-content-center mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].creaValoracio}</h4>
                        <p><strong>Què puntuació li dones a aquest restaurant?</strong>
                            <select className="ms-2" name="valoracioRestaurant" onChange={this.onChange}>
                                {/* <option defaultValue="Tria">Tria</option> */}
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            {console.log(this.state.valoracioRestaurant)}
                        </p>
                        <p>Deixa un comentari</p>
                        <p>
                            <textarea rows="4" cols="60" placeholder="Escriu un comentari..." name="comentariRestaurant" onChange={this.onChange}></textarea>
                        </p>
                        {console.log(this.state.comentariRestaurant)}
                        <p><button className="btn btn-primary btn-lg" onClick={this.crearValoracio}>Valorar</button></p>
                    </div>
                    : console.log()}
                <div id="iframeDiv"></div>
            </div>
        )
    }
}