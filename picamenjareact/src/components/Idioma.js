import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import axios from 'axios';

export default class Idioma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_idioma: "",
            idioma: ""
        }
    }

    componentDidMount() {
        if (this.props.id_idioma !== -1) {
            this.descarregaIdioma(this.props.id_idioma);
        }
    }

    descarregaIdioma = (id_idioma) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            //headers: { Authorization: 'Bearer ' + "token"}
        };
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/idiomes' + id_idioma, config)
            .then(response => {
                console.log(response);
                this.setState({
                    id_idioma: response.data.id_idioma,
                    idioma: response.data.idioma
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
            //headers: { Authorization: 'Bearer ' + "token"}
        };
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/idiomes', config)
            .then(response => {
                console.log(response);
                this.setState({ idiomes: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
                if (error.response.status === 401) {
                    window.location.assign("/login");
                }
            })
    }

    inserta = () => {
        // Modificar les dades a la api
        if (this.state.idioma === "") {
            return alert("Error. S'han d'omplir tots els camps.");
        }
        let formData = new URLSearchParams();
        formData.append("idioma", this.state.idioma);
        // Token
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token")
            }
        };
        axios.post('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/idiomes', formData, config)
            .then(response => {
                console.log(response);
                alert("Insertat amb èxit!");
                window.location.assign("/idiomes");
                this.descarrega();
            }
            ).catch(error => {
                console.log(error);
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/idiomes"); }} />
                    </div>
                    <div className="col-md-4 mt-3">
                        <h1 className="row justify-content-center">Insertar un idioma</h1>
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">Dades</h2>
                <br />
                <div className='row'>
                    <div className="col-md-4">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>ID:</label>
                            <input type="text" className="form-control" value={this.state.id_idioma} readOnly />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Idioma:</label>
                            <input type="text" className='form-control' name='idioma' value={this.state.idioma} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="row"><div className="col-md-4">&nbsp;</div></div>
                    <div className="row justify-content-center">
                        <div className="col-md-1">
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    value="Insertar"
                                    onClick={this.inserta} />
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        )
    }
}