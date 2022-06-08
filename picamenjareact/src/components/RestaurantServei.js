import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import Select from "./Select";
import traduccions from "./traduccions.json";

export default class RestaurantServei extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_restaurant: "",
            id_servei: "",
        };
    }

    componentDidMount() {
        if (this.props.id_servei !== -1) {
            this.descarrega();
        }
    }

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants_serveis", config)
            .then((response) => {
                //console.log(response);
                this.setState({ serveis: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    window.location.assign("/login");
                }
            });
    };

    inserta = () => {
        //Modificar les dades a la api
        if (this.state.id_restaurant === "" || this.state.id_servei === "") {
            return alert(traduccions[sessionStorage.getItem("id_idioma")][0].errorCamps);
        }
        let formData = new URLSearchParams();
        formData.append("id_restaurant", this.state.id_restaurant);
        formData.append("id_servei", this.state.id_servei);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/restaurants_serveis", formData, config
        ).then((response) => {
            // console.log(response);
            alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitInsert);
            window.location.assign("/restaurants_serveis");
            this.descarrega();
        }
        ).catch((error) => {
            console.log(error);
            if (error.response.data.exception === "Illuminate\\Database\\QueryException") {
                alert(traduccions[sessionStorage.getItem("id_idioma")][0].clauDuplicada);
            }
        });
    };

    onChangeRestaurant = (v) => {
        this.setState({ id_restaurant: v });
    };

    onChangeServei = (v) => {
        this.setState({ id_servei: v });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <Container>
                <div className="row mt-3">
                    <h1 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].insertRestServei}</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/restaurants_serveis"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].dades}</h2>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <div>
                                <label>{traduccions[sessionStorage.getItem("id_idioma")][0].restaurant}: </label>
                            </div>
                            <Select
                                canviar={this.onChangeRestaurant}
                                valorInicial={this.state.id_restaurant}
                                clau="id_restaurant"
                                display="nom"
                                url="https://picamenja.com/PicaMenja/public/api/restaurants"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <div>
                                <label>{traduccions[sessionStorage.getItem("id_idioma")][0].servei}: </label>
                            </div>
                            {sessionStorage.getItem("id_idioma") === "1" ?
                                <Select
                                    canviar={this.onChangeServei}
                                    valorInicial={this.state.id_servei}
                                    clau="id_servei"
                                    display="servei_ca"
                                    url="https://picamenja.com/PicaMenja/public/api/serveis"
                                />
                                : console.log()}
                            {sessionStorage.getItem("id_idioma") === "2" ?
                                <Select
                                    canviar={this.onChangeServei}
                                    valorInicial={this.state.id_servei}
                                    clau="id_servei"
                                    display="servei_es"
                                    url="https://picamenja.com/PicaMenja/public/api/serveis"
                                />
                                : console.log()}
                            {sessionStorage.getItem("id_idioma") === "3" ?
                                <Select
                                    canviar={this.onChangeServei}
                                    valorInicial={this.state.id_servei}
                                    clau="id_servei"
                                    display="servei_en"
                                    url="https://picamenja.com/PicaMenja/public/api/serveis"
                                />
                                : console.log()}
                            {sessionStorage.getItem("id_idioma") === "4" ?
                                <Select
                                    canviar={this.onChangeServei}
                                    valorInicial={this.state.id_servei}
                                    clau="id_servei"
                                    display="servei_de"
                                    url="https://picamenja.com/PicaMenja/public/api/serveis"
                                />
                                : console.log()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-1">
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-success btn-lg"
                                value={traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert}
                                onClick={this.inserta} />
                            <p></p>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        );
    }
}
