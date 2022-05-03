import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import Select from "./Select";

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
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        // };
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants_serveis")
            .then((response) => {
                //console.log(response);
                this.setState({ serveis: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    //window.location.assign("/login");
                }
            });
    };

    inserta = () => {
        //Modificar les dades a la api
        if (this.state.id_restaurant === "" || this.state.id_servei === "") {
            return alert("Error. S'han d'omplir tots els camps.");
        }
        let formData = new URLSearchParams();
        formData.append("id_restaurant", this.state.id_restaurant);
        formData.append("id_servei", this.state.id_servei);
        //Token
        // const config = {
        //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants_serveis", formData
        ).then((response) => {
            console.log(response);
            alert("Insertat amb èxit!");
            window.location.assign("/restaurants_serveis");
            this.descarrega();
        }
        ).catch((error) => {
            console.log(error);
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
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/restaurants_serveis"); }} />
                    </div>
                    <div className="col-md-4 mt-3">
                        <h1 className="row justify-content-center">Inserta restaurant servei</h1>
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">Dades</h2>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <div>
                                <label>Restaurant: </label>
                            </div>
                            <Select
                                canviar={this.onChangeRestaurant}
                                valorInicial={this.state.id_restaurant}
                                clau="id_restaurant"
                                display="nom"
                                url="http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <div>
                                <label>Servei: </label>
                            </div>
                            <Select
                                canviar={this.onChangeServei}
                                valorInicial={this.state.id_servei}
                                clau="id_servei"
                                display="servei_ca"
                                url="http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/serveis"
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
                                className="btn btn-primary btn-lg"
                                value="Insertar"
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
