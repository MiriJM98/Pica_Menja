import axios from "axios";
import React, { Component } from "react";
import { Rating } from "react-simple-star-rating";

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
            valoracio: "",
            puntuacio: -1
        };
    }

    componentDidMount() {
        if (this.props.id_restaurant !== -1) {
            this.descarregaRestaurant(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1) {
            this.mostraComentaris(this.props.id_restaurant);
        }
        if (this.props.id_restaurant !== -1) {
            this.mostraValoracio(this.props.id_restaurant);
        }
        // if (this.props.id_restaurant !== -1) {
        //     this.fotosRestaurant(this.props.id_restaurant);
        // }
    }

    descarregaRestaurant = (id_restaurant) => {
        const mostrador = document.getElementById("contingut");
        const divIframe = document.getElementById("iframeDiv");
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants/" + id_restaurant)
            .then((response) => {
                console.log(response);
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
                let descripcio = document.createTextNode(response.data.descripcio_ca);
                let imatgeDesc = document.createElement("img");
                let telefon = document.createTextNode(response.data.telefon);
                let imatgeTel = document.createElement("img");
                let horari = document.createTextNode(response.data.horari_ca);
                let imatgeHorari = document.createElement("img");
                let pagina_web = document.createElement("a");
                pagina_web.text = response.data.pagina_web;
                pagina_web.href = response.data.pagina_web;
                let imatgeWeb = document.createElement("img");
                let ubicacio = document.createTextNode(response.data.ubicacio);
                let imatgeUbi = document.createElement("img");
                let tipus = document.createTextNode(response.data.tipus.tipus_ca);
                let imatgeTipus = document.createElement("img");
                let rang = document.createTextNode(response.data.rang_preus);
                let imatgeRang = document.createElement("img");
                let iframe = document.createElement("iframe");
                let carta = document.createElement("img");
                let link = document.createElement("a");
                link.href = response.data.carta;
                // carta.appendChild(link);
                //
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
                // carta.href = response.data.carta;
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
                //
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
                //Mostrar error
                console.log(error);
            })
    }

    fotosRestaurant = (id_restaurant) => {
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos/restaurant/" + id_restaurant)
            .then((response) => {
                console.log(response);
                console.log(this.state.id_restaurant);
                this.setState({
                    fotos: response.data,
                });
                this.state.fotos.forEach(foto => {
                    let carta = document.createElement("div");
                    let h3 = document.createElement("h3");
                    // carta.setAttribute("id", "cartes");
                    let imatge = document.createElement("img");
                    // header.setAttribute("id", "cartaHeader");
                    // imatge.setAttribute("id", "imatgeCarta");
                    // buttonID.setAttribute("id", "buttonID");
                    imatge.setAttribute("src", foto.foto);
                    imatge.setAttribute("width", 300);
                    carta.appendChild(h3);
                    carta.appendChild(imatge);
                    document.getElementById("carouselRestaurant").appendChild(carta);
                }
                );
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            })
    }

    mostraComentaris = (id_restaurant) => {
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/comentaris/restaurant/" + id_restaurant)
            .then((response) => {
                console.log(response);
                this.setState({
                    comentaris: response.data
                });
                const a = document.getElementById("divComentaris");
                a.innerHTML = "";
                let table = document.createElement("table");
                this.state.comentaris.forEach(comentari => {
                    let tr = document.createElement("tr");
                    let tdComentari = document.createElement("td");
                    let tdData = document.createElement("td");
                    let tdUsuari = document.createElement("td");
                    ////
                    let missatge = document.createTextNode(comentari.comentari);
                    let data = document.createTextNode(comentari.data);
                    let usuari = document.createTextNode(comentari.usuari);
                    ////
                    tdComentari.appendChild(missatge);
                    tdData.appendChild(data);
                    tdUsuari.appendChild(usuari);
                    tr.appendChild(tdComentari);
                    tr.appendChild(tdData);
                    tr.appendChild(tdUsuari);
                    table.appendChild(tr);
                    document.getElementById("divComentaris").appendChild(table);
                });
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            });
    }

    mostraValoracio = (id_restaurant) => {
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/valoracions/mitjana/restaurant/" + id_restaurant)
            .then((response) => {
                console.log(response);
                this.setState({
                    valoracio: response.data
                });
                console.log(this.state.valoracio);
                const div = document.getElementById("divValoracions");
                div.innerHTML = "";
                this.state.valoracio.forEach(nota => {
                    let parseat = parseFloat(nota.valoracio);
                    console.log("PARSEAT " + parseat);
                    this.setState({
                        puntuacio: parseat
                    });
                    let puntuacio = document.createElement("p");
                    let valoracio = document.createTextNode(parseat);
                    puntuacio.setAttribute("font-size", "20pt");
                    puntuacio.appendChild(valoracio);
                    document.getElementById("divValoracions").appendChild(puntuacio);
                    console.log("TIPO " + typeof parseat);
                });
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            });
    }

    render() {
        return (
            <div id="frontRestaurant" className="row justify-content-center">
                <h1 className="row justify-content-center mt-4">{this.state.nom}</h1>
                <div id="carouselRestaurant"></div>
                <div id="contingut"></div>
                <h2>Comentaris</h2>
                <div id="divComentaris"></div>
                <h2>Valoració global</h2>
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
                        />
                        : console.log()}

                    {this.state.puntuacio === -1 ?
                        <><p>No valorat</p>
                            <Rating
                                onClick={this.mostraValoracio}
                                ratingValue={0} /></>
                        : console.log()}

                </div>
                <div id="iframeDiv"></div>
            </div>
        )
    }
}