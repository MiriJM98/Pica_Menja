import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import traduccions from "./traduccions.json";

export default class Servei extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_servei: "",
            servei_ca: "",
            servei_es: "",
            servei_en: "",
            servei_de: "",
        };
    }

    componentDidMount() {
        if (this.props.id_servei !== -1) {
            this.descarregaServei(this.props.id_servei);
        }
    }

    descarregaServei = (id_servei) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("https://picamenja.com/PicaMenja/public/api/serveis/" + id_servei, config)
            .then((response) => {
                //console.log(response);
                this.setState({
                    id_servei: response.data.id_servei,
                    servei_ca: response.data.servei_ca,
                    servei_es: response.data.servei_es,
                    servei_en: response.data.servei_en,
                    servei_de: response.data.servei_de,
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            })
    }

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get("https://picamenja.com/PicaMenja/public/api/serveis", config)
            .then((response) => {
                console.log(response);
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
        // Modificar les dades a la api
        if (this.state.servei_ca === "" || this.state.servei_es === "" || this.state.servei_en === "" || this.state.servei_de === "") {
            return alert(traduccions[sessionStorage.getItem("id_idioma")][0].errorCamps);
        }
        let formData = new URLSearchParams();
        formData.append("servei_ca", this.state.servei_ca);
        formData.append("servei_es", this.state.servei_es);
        formData.append("servei_en", this.state.servei_en);
        formData.append("servei_de", this.state.servei_de);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/serveis", formData, config
        ).then((response) => {
            console.log(response);
            alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitInsert);
            window.location.assign("/serveis");
            this.descarrega();
        }
        ).catch((error) => {
            console.log(error);
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    enviaFormulari = () => {
        if (this.state.id_servei === "") {
            this.inserta();
        }
    };

    render() {
        return (
            <Container>
                <div className="row mt-3">
                    <h1 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].insertServei2}</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value={traduccions[sessionStorage.getItem("id_idioma")][0].botoTornar}
                            onClick={() => { window.location.assign("/serveis"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].dades}</h2>
                <br />
                <div className="row">
                    <div className="col-md-1">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].ID}:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.id_servei}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].servei_ca}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="servei_ca"
                                value={this.state.servei_ca}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].servei_es}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="servei_es"
                                value={this.state.servei_es}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].servei_en}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="servei_en"
                                value={this.state.servei_en}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].servei_de}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="servei_de"
                                value={this.state.servei_de}
                                onChange={this.onChange}
                            />
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
                                value={
                                    this.state.id_servei === "" ? traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert
                                        : traduccions[sessionStorage.getItem("id_idioma")][0].botoUpdate
                                }
                                onClick={this.enviaFormulari} />
                            <p></p>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        );
    }
}
