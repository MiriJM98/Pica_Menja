import axios from "axios";
import React, { Component } from "react";

export default class Filtre extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id_tipus: -1,
            restaurants_tipus: [],
        };
    }

    componentDidMount() {
        this.filtre();
    }

    filtre = () => {
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

    render() {
        return (
            <div>
                <h1 className="row justify-content-center mt-4">Filtre</h1>
                <p id="contenedorTipus"></p>
            </div>
        )
    }
}