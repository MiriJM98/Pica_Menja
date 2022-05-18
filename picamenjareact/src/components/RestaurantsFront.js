import axios from "axios";
import React, { Component } from "react";
import Select from "./Select";


export default class RestaurantsFront extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            restaurants_tipus: [],
            current_page: "",
            id_restaurant: -1,
            id_tipus: "",
        };
    }



    componentDidMount = () => {
        if (document.getElementById("contenedorTaula").style.display !== "none") {
            this.restaurants();
        }
    };

    restaurants = () => {
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants/front")
            .then((response) => {
                console.log(response);
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
                        let nom = document.createTextNode(restaurant.nom);
                        let id_rest = document.createTextNode("Click!");
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

    filtrar = () => {
        window.location.assign("/filtre/" + this.state.id_tipus);
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants/tipusCa/" + this.state.id_tipus)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    this.setState({
                        restaurants_tipus: response.data,
                        id_tipus: response.data.id_tipus,
                    });
                    // let titol = document.createElement("h1");
                    // let text = document.createTextNode("HOLA");
                    // titol.appendChild(text);
                    // document.getElementById("contenedorTipus").appendChild(titol);
                    this.state.restaurants_tipus.forEach(restaurant => {
                        let carta = document.createElement("div");
                        let h3 = document.createElement("h3");
                        let texte = document.createTextNode("Filtre");
                        // carta.setAttribute("id", "cartes");
                        let header = document.createElement("h4");
                        let imatge = document.createElement("img");
                        let buttonID = document.createElement("button");
                        buttonID.onclick = function () {
                            window.location.assign(
                                "/restaurantFront/" + restaurant.id_restaurant
                            );
                        }
                        // header.setAttribute("id", "cartaHeader");
                        // imatge.setAttribute("id", "imatgeCarta");
                        // buttonID.setAttribute("id", "buttonID");
                        imatge.setAttribute("src", restaurant.image);
                        imatge.setAttribute("width", 300);
                        let nom = document.createTextNode(restaurant.restaurant);
                        let id_rest = document.createTextNode("Click!");
                        header.appendChild(nom);
                        h3.appendChild(texte);
                        buttonID.appendChild(id_rest);
                        carta.appendChild(h3);
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

    onChangeTipus = (v) => {
        this.setState({ id_tipus: v });
    };

    render() {
        return (
            <div>
                <h1 className="row justify-content-center mt-4">Restaurants</h1>
                <Select
                    canviar={this.onChangeTipus}
                    valorInicial={this.state.id_tipus}
                    clau="id_tipus"
                    display="tipus_ca"
                    url="http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/tipus"
                />
                <button type="button" onClick={this.filtrar}>Cerca</button>
                <div id="contenedorTaula"></div>
                <p id="contenedorTipus"></p>
            </div>
        )
    }
}


/*
<div id="mostrador" style={{ display: 'block' }}>
    <table id="taula"></table>
</div>
<div id="mostrador2">
<table id="taula2"></table>
</div>
<div id="mostrador3"></div>
<div>
<button id="previousPage" onClick={this.previousPage}>Previous</button>
<button id="nextPage" className="ms-2 mt-5 mb-3" onClick={this.nextPage}>Next</button>
</div> */