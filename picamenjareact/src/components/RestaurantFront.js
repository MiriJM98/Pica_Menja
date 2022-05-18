import axios from "axios";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

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
            fotos: [],
        };
    }

    componentDidMount() {
        if (this.props.id_restaurant !== -1) {
            this.descarregaRestaurant(this.props.id_restaurant);
        }
        // if (this.props.id_restaurant !== -1) {
        //     this.fotosRestaurant(this.props.id_restaurant);
        // }
    }

    descarregaRestaurant = (id_restaurant) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants/" + id_restaurant, config)
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
                });

                let taula = document.createElement("table");
                let tr = document.createElement("tr");
                let td_telefon = document.createElement("td");
                let td_pagina_web = document.createElement("td");
                let td_ubicacio = document.createElement("td");
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
                    document.getElementById("contingut").appendChild(carta);
                }
                );
            })
    }


    render() {
        return (
            <Container>
                <h1 className="row justify-content-center mt-4">Restaurant Front</h1>
                <h2 className="row justify-content-center mt-4">{this.state.nom}</h2>
                <div id="contingut"></div>
                <div id="infoRestaurant"></div>
            </Container>
        )
    }
}