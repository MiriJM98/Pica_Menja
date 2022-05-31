import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import axios from 'axios';
import traduccions from "./traduccions.json";

export default class Usuari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_usuari: "",
            nom_usuari: "",
            llinatges: "",
            telefon: "",
            direccio: "",
            data_naixement: "",
            email: "",
            password: "",
            administrador: "",
            foto_perfil: "",
        }
    }

    componentDidMount() {
        console.log(this.props.id_usuari);
        if (this.props.id_usuari !== -1) {
            this.descarrega(this.props.id_usuari);
        }
    }

    descarrega = (id_usuari) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get('https://picamenja.com/PicaMenja/public/api/usuaris/' + id_usuari, config)
            .then(response => {
                console.log(response);
                this.setState({
                    id_usuari: response.data.id_usuari,
                    nom_usuari: response.data.nom_usuari,
                    llinatges: response.data.llinatges,
                    telefon: response.data.telefon,
                    direccio: response.data.direccio,
                    data_naixement: response.data.data_naixement,
                    email: response.data.email,
                    password: response.data.password,
                    administrador: response.data.administrador,
                    foto_perfil: response.data.foto_perfil,
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            })
    }

    update = () => {
        // Modificar les dades a la api
        let formData = new URLSearchParams();
        formData.append("nom_usuari", this.state.nom_usuari);
        formData.append("llinatges", this.state.llinatges);
        formData.append("telefon", this.state.telefon);
        formData.append("direccio", this.state.direccio);
        formData.append("data_naixement", this.state.data_naixement);
        formData.append("email", this.state.email);
        formData.append("administrador", this.state.administrador);
        formData.append("foto_perfil", this.state.foto_perfil);
        // Token
        console.log(formData);
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token"),
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios.put('https://picamenja.com/PicaMenja/public/api/usuaris/' + this.state.id_usuari, formData, config
        ).then(response => {
            console.log(response);
            alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitUpdate);
            window.location.assign("/usuaris");
            this.descarrega();
        }
        ).catch(error => {
            console.log(error);
        });
    }

    inserta = () => {
        // Insertar les dades a la api
        if (this.state.email === "" || this.state.nom_usuari === "" || this.state.llinatges === "" || this.state.telefon === "" || this.state.data_naixement === "" || this.state.direccio === "" || this.state.administrador === "" || this.state.password === "") {
            return alert(traduccions[sessionStorage.getItem("id_idioma")][0].errorCamps);
        }
        let formData = new URLSearchParams();
        formData.append("nom_usuari", this.state.nom_usuari);
        formData.append("llinatges", this.state.llinatges);
        formData.append("telefon", this.state.telefon);
        formData.append("direccio", this.state.direccio);
        formData.append("data_naixement", this.state.data_naixement);
        formData.append("email", this.state.email);
        formData.append("administrador", this.state.administrador);
        formData.append("foto_perfil", this.state.foto_perfil);
        formData.append("password", this.state.password);
        // Token
        console.log(formData);
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token"),
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post('https://picamenja.com/PicaMenja/public/api/usuaris', formData, config)
            .then(response => {
                console.log(response);
                alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitInsert);
                window.location.assign("/usuaris");
                this.descarrega();
            }
            ).catch(error => {
                console.log(error);
            });
    }

    enviaFormulari = () => {
        if (this.state.id_usuari === '') {
            this.inserta();

        } else {
            this.update();
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <div className="row mt-3">
                    <h1 className="row justify-content-center">{this.state.id_usuari === "" ? traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert
                        : traduccions[sessionStorage.getItem("id_idioma")][0].botoUpdate}
                    </h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value={traduccions[sessionStorage.getItem("id_idioma")][0].botoTornar}
                            onClick={() => { window.location.assign("/usuaris"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].dades}</h2>
                <br />
                <div className='row'>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].ID}:</label>
                            <input type="text" className="form-control" value={this.state.id_usuari} readOnly />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].nomusuari}:</label>
                            <input type="text" className='form-control' name='nom_usuari' value={this.state.nom_usuari} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].llinatges}:</label>
                            <input type="text" className='form-control' name='llinatges' value={this.state.llinatges} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].datanaix}:</label>
                            <input value={this.state.data_naixement} type="date" name='data_naixement' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].admin}:</label>
                            <input value={this.state.administrador} type="email" name='administrador' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                <div className='row'>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].telefon}:</label>
                            <input value={this.state.telefon} type="text" name='telefon' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].direccio}:</label>
                            <input value={this.state.direccio} type="text" name='direccio' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].email}:</label>
                            <input value={this.state.email} type="email" name='email' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>

                    {this.state.id_usuari === '' ?
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>{traduccions[sessionStorage.getItem("id_idioma")][0].password}:</label>
                                <input value={this.state.password} type="password" name='password' onChange={this.onChange} className="form-control" />
                            </div>
                        </div> : ""}
                    <div className="row"><div className="col-md-4">&nbsp;</div></div>
                </div>
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                <div className="row justify-content-center">
                    <div className="col-md-1">
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-success btn-lg"
                                value={
                                    this.state.id_usuari === "" ? traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert
                                        : traduccions[sessionStorage.getItem("id_idioma")][0].botoUpdate
                                }
                                onClick={this.enviaFormulari}
                            />
                            <p></p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}