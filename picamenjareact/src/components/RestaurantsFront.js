/* eslint-disable jsx-a11y/heading-has-content */
import axios from "axios";
import React, { Component } from "react";
import { Image } from "react-bootstrap";
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
        if (document.getElementById("contenedorTaula").style.display !== "none") {
            this.restaurants();
        }
    };

    restaurants = () => {
        console.log("POR DIOS MIRA AQUÍ ---> " + sessionStorage.getItem("id_idioma"));
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/front")
            .then((response) => {
                // console.log(response);
                if (response.status === 200) {
                    this.setState({
                        restaurants: response.data,
                        current_page: response.data.current_page,
                        id_tipus: response.data.id_tipus,
                    });

                    this.state.restaurants.forEach(restaurant => {
                        let carta = document.createElement("div");
                        carta.setAttribute("id", "cartes");
                        let header = document.createElement("h4");
                        let imatge = document.createElement("img");
                        let buttonID = document.createElement("button");
                        buttonID.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        buttonID.setAttribute("id", "buttonID");
                        imatge.setAttribute("src", restaurant.imatge);
                        imatge.setAttribute("width", 300);
                        imatge.setAttribute("alt", "Foto restaurant");
                        let nom = document.createTextNode(restaurant.nom);
                        let info = traduccions[sessionStorage.getItem("id_idioma")][0].info;
                        let id_rest = document.createTextNode(info);
                        header.appendChild(nom);
                        buttonID.appendChild(id_rest);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        carta.appendChild(buttonID);
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
                        let imatge = document.createElement("img");
                        let buttonID = document.createElement("button");
                        buttonID.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        buttonID.setAttribute("id", "buttonID");
                        imatge.setAttribute("src", restaurant.image);
                        imatge.setAttribute("width", 300);
                        let nom = document.createTextNode(restaurant.restaurant);
                        let info = traduccions[sessionStorage.getItem("id_idioma")][0].info;
                        let id_rest = document.createTextNode(info);
                        header.appendChild(nom);
                        buttonID.appendChild(id_rest);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        carta.appendChild(buttonID);
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
                    const tipus = document.getElementById("contenedorTipus");
                    tipus.innerHTML = "";
                    let preusFiltre= "";
                    const divPreus = document.getElementById("titolPreus");
                    divPreus.innerHTML = "";
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
                        let imatge = document.createElement("img");
                        let buttonID = document.createElement("button");
                        buttonID.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        header.setAttribute("id", "cartaHeader");
                        imatge.setAttribute("id", "imatgeCarta");
                        buttonID.setAttribute("id", "buttonID");
                        imatge.setAttribute("src", restaurant.image);
                        imatge.setAttribute("width", 300);
                        let nom = document.createTextNode(restaurant.nom);
                        let info = traduccions[sessionStorage.getItem("id_idioma")][0].info;
                        let id_rest = document.createTextNode(info);
                        header.appendChild(nom);
                        buttonID.appendChild(id_rest);
                        carta.appendChild(header);
                        carta.appendChild(imatge);
                        carta.appendChild(buttonID);
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
                console.log(response);
                this.setState({
                    restaurants_serveis: response.data,
                });
                const mostrador = document.getElementById("contenedorTaula");
                mostrador.innerHTML = "";
                const tipus = document.getElementById("contenedorTipus");
                tipus.innerHTML = "";
                this.state.restaurants_serveis.forEach(restaurant => {
                    let carta = document.createElement("div");
                    carta.setAttribute("id", "cartes");
                    let header = document.createElement("h2");
                    let imatge = document.createElement("img");
                    let buttonID = document.createElement("button");
                    buttonID.onclick = function () {
                        window.location.assign(
                            "/restaurantFront/" + restaurant.id_restaurant
                        );
                    }
                    header.setAttribute("id", "cartaHeader");
                    imatge.setAttribute("id", "imatgeCarta");
                    buttonID.setAttribute("id", "buttonID");
                    imatge.setAttribute("src", restaurant.imatge);
                    imatge.setAttribute("width", 300);
                    let nom = document.createTextNode(restaurant.restaurant);
                    let info = traduccions[sessionStorage.getItem("id_idioma")][0].info;
                    let id_rest = document.createTextNode(info);
                    header.appendChild(nom);
                    buttonID.appendChild(id_rest);
                    carta.appendChild(header);
                    carta.appendChild(imatge);
                    carta.appendChild(buttonID);
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

    render() {
        return (
            <div>
                <h1 className="row justify-content-center mt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].restaurants}</h1>
                {/* FILTRAR PER TIPUS DE RESTAURANT */}
                <div id="divFiltre">
                    <h2>{traduccions[sessionStorage.getItem("id_idioma")][0].filtraTipus}</h2>
                    {sessionStorage.getItem("id_idioma") === "1" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_ca"
                                url="https://picamenja.com/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
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
                                <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
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
                                <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                    {sessionStorage.getItem("id_idioma") === "4" ?
                        <>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_de"
                                url="http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/tipus" />
                            <button type="button" className="btn btn-link" onClick={this.filtrarTipus} aria-label="Botó filtrar">
                                <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
                            </button></>
                        : console.log()}
                </div>
                {/* FILTRAR PER RANG DE PREUS */}
                <div id="divFiltre">
                    <h2>{traduccions[sessionStorage.getItem("id_idioma")][0].filtraPreu}</h2>

                    <Select
                        canviar={this.onChangeRang}
                        valorInicial={this.state.rang_preus}
                        clau="rang_preus"
                        display="rang_preus"
                        url="https://picamenja.com/PicaMenja/public/api/restaurantsPreus" />
                    <button type="button" className="btn btn-link" onClick={this.filtrarPreu} aria-label="Botó filtrar">
                        <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
                    </button>
                </div>

                {/* FILTRAR PER SERVEI */}
                <div id="divFiltre">
                    <h2>{traduccions[sessionStorage.getItem("id_idioma")][0].filtraServei}</h2>
                    <Select
                        canviar={this.onChangeServei}
                        valorInicial={this.state.id_servei}
                        clau="id_servei"
                        display="servei_ca"
                        url="https://picamenja.com/PicaMenja/public/api/serveis" />
                    <button type="button" className="btn btn-link" onClick={this.filtraServei} aria-label="Botó filtrar">
                        <Image src={process.env.PUBLIC_URL + '/lupa.png'} width="30px" alt="Filtrar"></Image>
                    </button>
                </div>
                <div id="contenedorTaula"></div>
                <div id="divTitolTipus">
                    <h3 id="titolTipus"></h3>
                </div>
                <div id="contenedorTipus"></div>
                <div id="divTitolPreus">
                    <h3 id="titolPreus"></h3>
                </div>
                <div id="contenedorPreus"></div>
                <div id="contenedorServei"></div>
            </div>
        )
    }
}