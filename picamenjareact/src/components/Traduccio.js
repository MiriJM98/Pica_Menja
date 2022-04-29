import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";

export default class Traduccio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_traduccio: "",
            catala: "",
            espanyol: "",
            english: "",
            deutsch: "",
        };
    }

    componentDidMount() {
        if (this.props.id_traduccio !== -1) {
            this.descarregatraduccions(this.props.id_traduccio);
        }
    }

    descarregatraduccions = (id_traduccio) => {
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        // };
        axios
            .get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/traduccions/" + id_traduccio)
            .then((response) => {
                //console.log(response);
                this.setState({
                    id_traduccio: response.data.id_traduccio,
                    catala: response.data.catala,
                    espanyol: response.data.espanyol,
                    english: response.data.english,
                    deutsch: response.data.deutsch,
                });
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            })
    }

    descarrega = () => {
        // const config = {
        //     headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        // };
        axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/traduccions")
            .then((response) => {
                console.log(response);
                this.setState({ traduccions: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    //window.location.assign("/login");
                }
            });
    };

    inserta = () => {
        let formData = new URLSearchParams();
        formData.append("catala", this.state.catala);
        formData.append("espanyol", this.state.espanyol);
        formData.append("english", this.state.english);
        formData.append("deutsch", this.state.deutsch);
        //Token
        // const config = {
        //   headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/traduccions", formData
        ).then((response) => {
            console.log(response);
            //alert("Insertat amb èxit!");
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
        if (this.state.catala === "" || this.state.espanyol === "" || this.state.english === "" || this.state.deutsch === "") {
            return alert("Error. S'han d'omplir tots els camps.");
        }

        if (this.state.id_traduccio === "") {
            this.inserta();
            alert("Insertat amb èxit!");
            window.location.assign("/traduccions");
            this.descarrega();
        }
    };

    render() {
        return (
            <Container>
                <hr />
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/traduccions"); }} />
                    </div>
                    <div className="col-md-4 mt-3">
                        <h2 className="row justify-content-center">Insertar una traducció</h2>
                    </div>
                </div>
                <br />
                <h2 className="row justify-content-center">Dades</h2>
                <br />
                <div className="row">
                    <div className="col-md-1">
                        <div className="form-group">
                            <label>ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.id_traduccio}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Català:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="catala"
                                value={this.state.catala}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Castellà:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="espanyol"
                                value={this.state.espanyol}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Anglès:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="english"
                                value={this.state.english}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Alemany:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="deutsch"
                                value={this.state.deutsch}
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
                                className="btn btn-primary btn-lg"
                                value={
                                    this.state.id_traduccio === "" ? "Insertar" : "Modificar"
                                }
                                onClick={this.enviaFormulari} />
                            <p></p>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
