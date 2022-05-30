import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container } from "react-bootstrap";
import axios from "axios";
import Select from "./Select";

export default class Restaurant extends Component {
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
        };
    }

    componentDidMount() {
        if (this.props.id_restaurant !== -1) {
            this.descarregaRestaurant(this.props.id_restaurant);
        }
    }

    descarregaRestaurant = (id_restaurant) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("https://picamenja.com/PicaMenja/public/api/restaurants/" + id_restaurant, config)
            .then((response) => {
                //console.log(response);
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
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            })
    }

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants", config)
            .then((response) => {
                console.log(response);
                this.setState({ restaurants: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    window.location.assign("/login");
                }
            });
    };

    update = () => {
        // Modificar les dades a la api
        let formData = new URLSearchParams();
        formData.append("nom", this.state.nom);
        formData.append("ubicacio", this.state.ubicacio);
        formData.append("telefon", this.state.telefon);
        formData.append("pagina_web", this.state.pagina_web);
        formData.append("descripcio_ca", this.state.descripcio_ca);
        formData.append("descripcio_es", this.state.descripcio_es);
        formData.append("descripcio_en", this.state.descripcio_en);
        formData.append("descripcio_de", this.state.descripcio_de);
        formData.append("horari_ca", this.state.horari_ca);
        formData.append("horari_es", this.state.horari_es);
        formData.append("horari_en", this.state.horari_en);
        formData.append("horari_de", this.state.horari_de);
        formData.append("rang_preus", this.state.rang_preus);
        formData.append("id_tipus", this.state.id_tipus);
        formData.append("imatge", this.state.imatge);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.put("https://picamenja.com/PicaMenja/public/api/restaurants/" + this.state.id_restaurant, formData,
            config)
            .then((response) => {
                console.log(response);
                alert("Modificació feta amb èxit!");
                window.location.assign("/restaurants_back");
                this.descarrega();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    inserta = () => {
        // Modificar dades a l'api
        if (this.state.nom === "" || this.state.ubicacio === "" || this.state.pagina_web === "" || this.state.telefon === "" || this.state.descripcio_ca === ""
            || this.state.descripcio_es === "" || this.state.descripcio_en === "" || this.state.descripcio_de === "" || this.state.horari_ca === ""
            || this.state.horari_es === "" || this.state.horari_en === "" || this.state.horari_de === "" || this.state.id_tipus === ""
            || this.state.rang_preus === "") {
            return alert("Error. S'han d'omplir tots els camps.");
        }
        let formData = new URLSearchParams();
        formData.append("nom", this.state.nom);
        formData.append("ubicacio", this.state.ubicacio);
        formData.append("telefon", this.state.telefon);
        formData.append("pagina_web", this.state.pagina_web);
        formData.append("descripcio_ca", this.state.descripcio_ca);
        formData.append("descripcio_es", this.state.descripcio_es);
        formData.append("descripcio_en", this.state.descripcio_en);
        formData.append("descripcio_de", this.state.descripcio_de);
        formData.append("horari_ca", this.state.horari_ca);
        formData.append("horari_es", this.state.horari_es);
        formData.append("horari_en", this.state.horari_en);
        formData.append("horari_de", this.state.horari_de);
        formData.append("id_tipus", this.state.id_tipus);
        formData.append("imatge", this.state.imatge);
        formData.append("rang_preus", this.state.rang_preus);
        formData.append("carta", this.state.carta);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/restaurants", formData, config
        ).then((response) => {
            console.log(response);
            alert("Insertat amb èxit!");
            window.location.assign("/restaurants_back");
            this.descarrega();
        }
        ).catch((error) => {
            console.log(error);
        });
    };

    updateFoto = () => {
        let formData = new FormData();
        formData.append("imatge", this.state.imatge);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("https://picamenja.com/PicaMenja/public/api/restaurants/imatge/" + this.state.id_restaurant, formData,
            config
        ).then((response) => {
            console.log(response);
            alert("Imatge pujada amb èxit!");
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

    onChangeFoto = (e) => {
        this.setState({
            imatge: e.target.files[0]
        })
    }

    onChangeTipus = (v) => {
        this.setState({ id_tipus: v });
    };

    enviaFormulari = () => {

        if (this.state.id_restaurant === "") {
            this.inserta();
        } else {
            this.update();
        }
    };

    render() {
        return (
            <Container>
                <div className="row mt-3">
                    <h1 className="row justify-content-center">{this.state.id_restaurant === "" ? "Insertar" : "Modificar"} un
                        restaurant</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/restaurants_back"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">Dades bàsiques</h2>
                <br />
                <div className="row">
                    <div className="col-md-1">
                        <div className="form-group">
                            <label>ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.id_restaurant}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Nom restaurant:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nom"
                                value={this.state.nom}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Direcció:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ubicacio"
                                value={this.state.ubicacio}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Telèfon:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="telefon"
                                value={this.state.telefon}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Image src={this.state.imatge} width="240" height="170" rounded />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Pàgina web:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pagina_web"
                                value={this.state.pagina_web}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Rang preus:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rang_preus"
                                value={this.state.rang_preus}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <div>
                                <label>Tipus: </label>
                            </div>
                            <Select
                                canviar={this.onChangeTipus}
                                valorInicial={this.state.id_tipus}
                                clau="id_tipus"
                                display="tipus_ca"
                                url="https://picamenja.com/PicaMenja/public/api/tipus"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Foto:</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                name="imatge"
                                onChange={this.onChangeFoto}
                                className="form-control"
                            />
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value={"Actualitza foto"}
                                    onClick={this.updateFoto}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <h3 className="row justify-content-center">Multi-idioma</h3>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Horari català:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="horari_ca"
                                value={this.state.horari_ca}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Horari castellà:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="horari_es"
                                value={this.state.horari_es}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Horari anglès:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="horari_en"
                                value={this.state.horari_en}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Horari alemany:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="horari_de"
                                value={this.state.horari_de}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Descripció català:</label>
                            <textarea
                                value={this.state.descripcio_ca}
                                className="form-control"
                                name="descripcio_ca"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Descripció castellà:</label>
                            <textarea
                                value={this.state.descripcio_es}
                                className="form-control"
                                name="descripcio_es"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Descripció anglès:</label>
                            <textarea
                                value={this.state.descripcio_en}
                                className="form-control"
                                name="descripcio_en"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Descripció alemany:</label>
                            <textarea
                                value={this.state.descripcio_de}
                                className="form-control"
                                name="descripcio_de"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row"></div>
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
                                    this.state.id_restaurant === "" ? "Insertar" : "Modificar"
                                }
                                onClick={this.enviaFormulari}
                            />
                            <p></p>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        );
    }
}
