/* eslint-disable jsx-a11y/heading-has-content */
import axios from "axios";
import React, { Component } from "react";
import { Image } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import Select from "./Select";
import traduccions from "./traduccions.json";

export default class RestaurantsFront extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            restaurants_tipus: [],
            restaurants_preus: [],
            current_page: "",
            id_restaurant: -1,
            id_tipus: "",
            rang_preus: "",
            restaurants_serveis: [],
            serveis: [],
            id_servei: -1,
        };
    }

    componentDidMount = () => {
        this.restaurants();
        this.descarregaUsuari();
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

    // FUNCIÓ PER RECARREGAR EL COMPONENT
    handleRefresh = () => {
        this.setState({});
    };

    restaurants = () => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/front")
            .then((response) => {
                // console.log(response);
                if (response.status === 200) {
                    this.setState({
                        restaurants: response.data,
                        current_page: response.data.current_page,
                        id_tipus: response.data.id_tipus,
                    });
                    let div = document.getElementById("contenedorTaula");
                    div.innerHTML = "";
                    response.data.forEach(restaurant => {
                        let carta = document.createElement("div");
                        carta.setAttribute("id", "cartes");
                        let header = document.createElement("h2");
                        header.style.cursor = "pointer";
                        let imatge = document.createElement("img");
                        imatge.style.cursor = "pointer";
                        header.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        imatge.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        imatge.setAttribute("src", process.env.PUBLIC_URL + restaurant.imatge);
                        imatge.setAttribute("width", 300);
                        imatge.setAttribute("height", 164);
                        imatge.setAttribute("alt", "Foto restaurant");
                        let nom = document.createTextNode(restaurant.nom);
                        header.appendChild(nom);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        document.getElementById("contenedorTaula").appendChild(carta);
                    }
                    );
                }
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data);
            });
    }

    filtrarTipus = () => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/tipusCa/" + this.state.id_tipus)
            .then((response) => {
                // console.log(response);
                if (response.status === 200) {
                    this.setState({
                        restaurants_tipus: response.data,
                        id_tipus: response.data.id_tipus,
                    });
                    const mostrador = document.getElementById("contenedorTaula");
                    mostrador.innerHTML = "";
                    const tipus = document.getElementById("contenedorTipus");
                    tipus.innerHTML = "";
                    let tipusFiltre = "";
                    const divTipus = document.getElementById("titolTipus");
                    divTipus.innerHTML = "";
                    const llevarFiltre = document.getElementById("botoLlevarTipus");
                    llevarFiltre.style.display = "block";
                    this.state.restaurants_tipus.forEach(restaurant => {
                        if (sessionStorage.getItem("id_idioma") === "1") {
                            tipusFiltre = restaurant.tipus_ca;
                        }
                        if (sessionStorage.getItem("id_idioma") === "2") {
                            tipusFiltre = restaurant.tipus_es;
                        }
                        if (sessionStorage.getItem("id_idioma") === "3") {
                            tipusFiltre = restaurant.tipus_en;
                        }
                        if (sessionStorage.getItem("id_idioma") === "4") {
                            tipusFiltre = restaurant.tipus_de;
                        }
                        let texte = traduccions[sessionStorage.getItem("id_idioma")][0].titolFiltreTipus + tipusFiltre;
                        divTipus.innerHTML = texte;
                        let carta = document.createElement("div");
                        carta.setAttribute("id", "cartes");
                        let header = document.createElement("h2");
                        header.style.cursor = "pointer";
                        let imatge = document.createElement("img");
                        imatge.style.cursor = "pointer";
                        header.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        imatge.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        imatge.setAttribute("src", restaurant.image);
                        imatge.setAttribute("width", 300);
                        imatge.setAttribute("height", 164);
                        let nom = document.createTextNode(restaurant.restaurant);
                        header.appendChild(nom);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        document.getElementById("contenedorTipus").appendChild(carta);
                    }
                    );
                }
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data);
            });
    }

    filtrarPreu = () => {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/rang/" + this.state.rang_preus)
            .then((response) => {
                // console.log(response);
                if (response.status === 200) {
                    this.setState({
                        restaurants_preus: response.data,
                        rang_preus: response.data.rang_preus,
                    });
                    const mostrador = document.getElementById("contenedorTaula");
                    mostrador.innerHTML = "";
                    const tipus = document.getElementById("contenedorPreus");
                    tipus.innerHTML = "";
                    let preusFiltre = "";
                    const divPreus = document.getElementById("titolPreus");
                    divPreus.innerHTML = "";
                    const llevarFiltre = document.getElementById("botoLlevarPreus");
                    llevarFiltre.style.display = "block";
                    this.state.restaurants_preus.forEach(restaurant => {
                        if (sessionStorage.getItem("id_idioma") === "1") {
                            preusFiltre = restaurant.rang_preus;
                        }
                        if (sessionStorage.getItem("id_idioma") === "2") {
                            preusFiltre = restaurant.rang_preus;
                        }
                        if (sessionStorage.getItem("id_idioma") === "3") {
                            preusFiltre = restaurant.rang_preus;
                        }
                        if (sessionStorage.getItem("id_idioma") === "4") {
                            preusFiltre = restaurant.rang_preus;
                        }
                        let texte = traduccions[sessionStorage.getItem("id_idioma")][0].titolFiltrePreus + preusFiltre;
                        divPreus.innerHTML = texte;
                        let carta = document.createElement("div");
                        carta.setAttribute("id", "cartes");
                        let header = document.createElement("h2");
                        header.style.cursor = "pointer";
                        let imatge = document.createElement("img");
                        imatge.style.cursor = "pointer";
                        header.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        imatge.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        imatge.setAttribute("src", restaurant.image);
                        imatge.setAttribute("width", 300);
                        imatge.setAttribute("height", 164);
                        let nom = document.createTextNode(restaurant.nom);
                        header.appendChild(nom);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        document.getElementById("contenedorPreus").appendChild(carta);
                    }
                    );
                }
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    filtraServei = () => {
        console.log(this.state.id_servei);
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis/restaurants/" + this.state.id_servei)
            .then((response) => {
                // console.log(response);
                this.setState({
                    restaurants_serveis: response.data,
                });
                const mostrador = document.getElementById("contenedorTaula");
                mostrador.innerHTML = "";
                const servei = document.getElementById("contenedorServei");
                servei.innerHTML = "";
                const divServei = document.getElementById("titolServei");
                divServei.innerHTML = "";
                let serveiFiltre = "";
                const llevarFiltre = document.getElementById("botoLlevarServeis");
                llevarFiltre.style.display = "block";
                this.state.restaurants_serveis.forEach(restaurant => {
                    if (sessionStorage.getItem("id_idioma") === "1") {
                        serveiFiltre = restaurant.servei_ca;
                    }
                    if (sessionStorage.getItem("id_idioma") === "2") {
                        serveiFiltre = restaurant.servei_es;
                    }
                    if (sessionStorage.getItem("id_idioma") === "3") {
                        serveiFiltre = restaurant.servei_en;
                    }
                    if (sessionStorage.getItem("id_idioma") === "4") {
                        serveiFiltre = restaurant.servei_de;
                    }
                    let texte = traduccions[sessionStorage.getItem("id_idioma")][0].titolFiltreTipus + serveiFiltre;
                    divServei.innerHTML = texte;
                    let carta = document.createElement("div");
                    carta.setAttribute("id", "cartes");
                    let header = document.createElement("h2");
                    header.style.cursor = "pointer";
                    let imatge = document.createElement("img");
                    imatge.style.cursor = "pointer";
                    header.onclick = function () {
                        window.location.assign(
                            "/restaurantFront/" + restaurant.id_restaurant
                        );
                    }
                    imatge.onclick = function () {
                        window.location.assign(
                            "/restaurantFront/" + restaurant.id_restaurant
                        );
                    }
                    header.setAttribute("id", "cartaHeader");
                    imatge.setAttribute("id", "imatgeCarta");
                    imatge.setAttribute("src", restaurant.imatge);
                    imatge.setAttribute("width", 300);
                    imatge.setAttribute("height", 164);
                    let nom = document.createTextNode(restaurant.restaurant);
                    header.appendChild(nom);
                    carta.appendChild(header);
                    carta.appendChild(imatge);
                    document.getElementById("contenedorServei").appendChild(carta);
                }
                );
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    onChangeTipus = (v) => {
        this.setState({ id_tipus: v });
    };

    onChangeRang = (v) => {
        this.setState({ rang_preus: v });
    };

    onChangeServei = (v) => {
        this.setState({ id_servei: v });
    };

    llevarFiltreTipus = () => {
        let div = document.getElementById("contenedorTipus");
        let titol = document.getElementById("divTitolTipus");
        let boto = document.getElementById("botoLlevarTipus");
        div.innerHTML = "";
        titol.innerHTML = "";
        boto.style.display = "none";
        this.restaurants();
        window.location.reload();
    }

    llevarFiltrePreus = () => {
        let div = document.getElementById("contenedorPreus");
        let titol = document.getElementById("divTitolPreus");
        let boto = document.getElementById("botoLlevarPreus");
        div.innerHTML = "";
        titol.innerHTML = "";
        boto.style.display = "none";
        this.restaurants();
        window.location.reload();
    }

    llevarFiltreServeis = () => {
        let div = document.getElementById("contenedorServei");
        let titol = document.getElementById("divTitolServeis");
        let boto = document.getElementById("botoLlevarServeis");
        div.innerHTML = "";
        titol.innerHTML = "";
        boto.style.display = "none";
        this.restaurants();
        window.location.reload();
    }

    render() {
        return (
            <div id="restaurantsFront">
                <div id="missatgeFiltre">
                    <p>{traduccions[sessionStorage.getItem("id_idioma")][0].lupa}</p>
                </div>
                {/* FILTRAR PER TIPUS DE RESTAURANT */}
                <div id="divFiltreTipus">
                    <h1 id="h1Filtre">{traduccions[sessionStorage.getItem("id_idioma")][0].filtraTipus}</h1>
                    {sessionStorage.getItem("id_idioma") === "1" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_ca"
                                url="https://picamenja.com/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "2" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_es"
                                url="https://picamenja.com/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "3" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_en"
                                url="https://picamenja.com/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "4" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_de"
                                url="https://picamenja.com/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                </div>
                {/* FILTRAR PER RANG DE PREUS */}
                <div id="divFiltrePreus">
                    <h1 id="h1Filtre">{traduccions[sessionStorage.getItem("id_idioma")][0].filtraPreu}</h1>

                    <Select
                        canviar={this.onChangeRang}
                        valorInicial={this.state.rang_preus}
                        clau="rang_preus"
                        display="rang_preus"
                        url="https://picamenja.com/PicaMenja/public/api/restaurantsPreus" />
                    <button type="button" className="btn btn-link" onClick={this.filtrarPreu} aria-label="Botó filtrar">
                        <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                    </button>
                </div>

                {/* FILTRAR PER SERVEI */}
                <div id="divFiltreServeis">
                    <h1 id="h1Filtre">{traduccions[sessionStorage.getItem("id_idioma")][0].filtraServei}</h1>
                    {sessionStorage.getItem("id_idioma") === "1" ?
                        <>
                            <Select
                                canviar={this.onChangeServei}
                                valorInicial={this.state.id_servei}
                                clau="id_servei"
                                display="servei_ca"
                                url="https://picamenja.com/PicaMenja/public/api/serveis" />
                            <button type="button" className="btn btn-link" onClick={this.filtraServei} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "2" ?
                        <>
                            <Select
                                canviar={this.onChangeServei}
                                valorInicial={this.state.id_servei}
                                clau="id_servei"
                                display="servei_es"
                                url="https://picamenja.com/PicaMenja/public/api/serveis" />
                            <button type="button" className="btn btn-link" onClick={this.filtraServei} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "3" ?
                        <>
                            <Select
                                canviar={this.onChangeServei}
                                valorInicial={this.state.id_servei}
                                clau="id_servei"
                                display="servei_en"
                                url="https://picamenja.com/PicaMenja/public/api/serveis" />
                            <button type="button" className="btn btn-link" onClick={this.filtraServei} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "4" ?
                        <>
                            <Select
                                canviar={this.onChangeServei}
                                valorInicial={this.state.id_servei}
                                clau="id_servei"
                                display="servei_de"
                                url="https://picamenja.com/PicaMenja/public/api/serveis" />
                            <button type="button" className="btn btn-link" onClick={this.filtraServei} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.webp'} width="30px" height="30" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                </div>
                <p id="h1Restaurants" className="row justify-content-center pt-5">{traduccions[sessionStorage.getItem("id_idioma")][0].restaurants}</p>

                {/* TOTS RESTAURANTS */}
                <div id="contenedorTaula"></div>

                {/* FILTRE PER TIPUS */}
                <div id="divTitolTipus">
                    <h3 id="titolTipus"></h3>
                </div>
                <div id="botoLlevarTipus" style={{ display: "none" }}>
                    <button id="botoTipus" onClick={this.llevarFiltreTipus}>{traduccions[sessionStorage.getItem("id_idioma")][0].llevarFiltre}</button>
                </div>
                <div id="contenedorTipus"></div>

                {/* FILTRE PER PREUS */}
                <div id="divTitolPreus">
                    <h3 id="titolPreus"></h3>
                </div>
                <div id="botoLlevarPreus" style={{ display: "none" }}>
                    <button id="botoTipus" onClick={this.llevarFiltrePreus}>{traduccions[sessionStorage.getItem("id_idioma")][0].llevarFiltre}</button>
                </div>
                <div id="contenedorPreus"></div>

                {/* FILTRE PER SERVEIS */}
                <div id="divTitolServeis">
                    <h3 id="titolServei"></h3>
                </div>
                <div id="botoLlevarServeis" style={{ display: "none" }}>
                    <button id="botoTipus" onClick={this.llevarFiltreServeis}>{traduccions[sessionStorage.getItem("id_idioma")][0].llevarFiltre}</button>
                </div>
                <div id="contenedorServei"></div>
                <ScrollToTop />
            </div>
        )
    }
}