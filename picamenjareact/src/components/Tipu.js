import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import traduccions from "./traduccions.json";

export default class Tipu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_tipus: "",
            tipus_ca: "",
            tipus_es: "",
            tipus_en: "",
            tipus_de: "",
        };
    }

    componentDidMount() {
        if (this.props.id_tipus !== -1) {
            this.descarregaTipus(this.props.id_tipus);
        }
    }

    descarregaTipus = (id_tipus) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("https://picamenja.com/PicaMenja/public/api/tipus/" + id_tipus, config)
            .then((response) => {
                //console.log(response);
                this.setState({
                    id_tipus: response.data.id_tipus,
                    tipus_ca: response.data.tipus_ca,
                    tipus_es: response.data.tipus_es,
                    tipus_en: response.data.tipus_en,
                    tipus_de: response.data.tipus_de,
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
        axios.get("https://picamenja.com/PicaMenja/public/api/tipus", config)
            .then((response) => {
                console.log(response);
                this.setState({ tipus: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    window.location.assign("/login");
                }
            });
    };

    inserta = () => {
        if (this.state.tipus_ca === "" || this.state.tipus_es === "" || this.state.tipus_en === "" || this.state.tipus_de === "") {
            return alert(traduccions[sessionStorage.getItem("id_idioma")][0].errorCamps);
        }
        let formData = new URLSearchParams();
        formData.append("tipus_ca", this.state.tipus_ca);
        formData.append("tipus_es", this.state.tipus_es);
        formData.append("tipus_en", this.state.tipus_en);
        formData.append("tipus_de", this.state.tipus_de);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/tipus", formData, config
        ).then((response) => {
            console.log(response);
            alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitInsert);
            window.location.assign("/tipus");
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
        if (this.state.id_tipus === "") {
            this.inserta();
        }
    };

    render() {
        return (
            <Container>
                <div className="row mt-3">
                    <h1 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].insertipus2}</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value={traduccions[sessionStorage.getItem("id_idioma")][0].botoTornar}
                            onClick={() => { window.location.assign("/tipus"); }} />
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
                                value={this.state.id_tipus}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].tipus_ca}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tipus_ca"
                                value={this.state.tipus_ca}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].tipus_es}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tipus_es"
                                value={this.state.tipus_es}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].tipus_en}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tipus_en"
                                value={this.state.tipus_en}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].tipus_de}:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tipus_de"
                                value={this.state.tipus_de}
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
                                value={traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert}
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
