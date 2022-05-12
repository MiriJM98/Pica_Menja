import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Image } from "react-bootstrap";
import axios from 'axios';
import FormData from 'form-data';

export default class PerfilUsuari extends Component {
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
            password_nova: "",
            administrador: "",
            foto_perfil: "",
        }
    }

    componentDidMount() {
        if (this.props.id_usuari !== -1) {
            this.descarrega(this.props.id_usuari);
        }
    }

    // DESCARREGAM LES DADES DE L'USUARI QUE HA FET LOGIN
    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        const usuari = sessionStorage.getItem("id_usuari");
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris/' + usuari, config)
            .then(response => {
                //console.log(response);
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

    // MODIFICAM LES DADES DE L'USUARI
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
        axios.put('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris/' + this.state.id_usuari, formData, config
        ).then(response => {
            console.log(response);
            alert("Modificat amb èxit!");
            window.location.assign("/perfilUsuari");
            this.descarrega();
        }
        ).catch(error => {
            console.log(error);
        });
    }

    // MODIFICAM LA CONTRASENYA DE L'USUARI
    updatePassword = () => {
        // Modificar les dades a la api
        let passwordNova = document.getElementById("password_nova").value;
        let passwordNovaRe = document.getElementById("password_nova_re").value;
        if (passwordNova !== passwordNovaRe) {
            console.log(passwordNova);
            return alert("Error. Les contrasenyes no coincideixen!!");
        }
        let formData = new URLSearchParams();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password_nova);
        // Token
        console.log(formData);
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token"),
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        axios.put('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris', formData, config
        ).then(response => {
            console.log(response);
            alert("Contrasenya modificada amb èxit!");
            window.location.assign("/perfilUsuari");
            this.descarrega();
        }
        ).catch(error => {
            console.log(error);
        });
    }

    // ACTUALITZAM LA FOTO DE PERFIL DE L'USUARI
    updateFoto = () => {
        if (this.state.foto_perfil !== null || this.state.foto_perfil !== "") {
            let formData = new FormData();
            formData.append("foto_perfil", this.state.foto_perfil);
            // Token
            const config = {
                headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
            };
            axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris/foto/" + this.state.id_usuari, formData,
                config
            ).then((response) => {
                console.log(response);
                alert("Imatge pujada amb èxit!");
            }
            ).catch((error) => {
                console.log(error);
            });
        }
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeFoto = (e) => {
        this.setState({
            foto_perfil: e.target.files[0]
        })
    }

    // FUNCIONS PER A LA NAVEGACIÓ DE COMPTE I PASSWORD
    canviaPassword = () => {
        document.getElementById("divPassword").style.display = "block";
        document.getElementById("divDades").style.display = 'none';
    }

    canviaCompte = () => {
        document.getElementById("divDades").style.display = "block";
        document.getElementById("divPassword").style.display = 'none';
    }

    render() {
        return (
            <Container>
                <div className="container-xl px-4 mt-4">
                    <h1 className='row justify-content-center'>El teu perfil</h1>
                    {/* NAVEGACIÓ */}
                    <nav className="nav nav-borders">
                        <Button variant="link" onClick={this.canviaCompte}>Compte</Button>
                        <Button variant="link" onClick={this.canviaPassword}>Contrasenya</Button>
                    </nav>
                    <hr className="mt-0 mb-4" />
                    <div className="row">
                        <div className="col-xl-4">
                            {/* SECCIÓ DEL PERFIL */}
                            <div className="card mb-4 mb-xl-0">
                                <div className="card-header">Foto de perfil</div>
                                <div className="card-body text-center">
                                    {/* FOTO DE PERFIL */}
                                    <Image src={this.state.foto_perfil} style={{ width: 200, height: 200, borderRadius: 400 / 2 }} />
                                    {/* NOM D'USUARI COMPLET */}
                                    <div className="row justify-content-center mt-3 mb-3 ms-4">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <input value={this.state.nom_usuari + " " + this.state.llinatges} readOnly
                                                    className="form-control" style={{ border: 0, backgroundColor: 'white' }} />
                                            </div>
                                            <div>
                                                <input
                                                    type="file"
                                                    accept="image/png, image/jpeg"
                                                    name="foto_perfil"
                                                    onChange={this.onChangeFoto}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* BOTÓ PER ACTUALITZAR FOTO DEL PERFIL */}
                                    <button className="btn btn-primary" type="button" onClick={this.updateFoto}>Actualitza foto</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8" id='divDades'>
                            {/* DETALLS DEL TEU COMPTE */}
                            <div className="card mb-4">
                                <div className="card-header">Detalls del teu perfil</div>
                                <div className="card-body">
                                    {/* PRIMERA FILA */}
                                    <div className="row gx-3 mb-3">
                                        {/* NOM USUARI */}
                                        <div className="col-md-6 mb-2">
                                            <label>Nom usuari:</label>
                                            <input type="text" className='form-control' name='nom_usuari' value={this.state.nom_usuari} onChange={this.onChange} />
                                        </div>
                                        {/* LLINATGES */}
                                        <div className="col-md-6">
                                            <label>Llinatges:</label>
                                            <input type="text" className='form-control' name='llinatges' value={this.state.llinatges} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    {/* SEGONA FILA */}
                                    <div className="row gx-3 mb-3">
                                        {/* DATA DE NAIXEMENT */}
                                        <div className="col-md-6 mb-2">
                                            <label>Data de naixement:</label>
                                            <input value={this.state.data_naixement} type="date" name='data_naixement' onChange={this.onChange} className="form-control" />
                                        </div>
                                        {/* TELÈFON */}
                                        <div className="col-md-6">
                                            <label>Telèfon:</label>
                                            <input type="text" className='form-control' name='telefon' value={this.state.telefon} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    {/* TERCERA FILA */}
                                    <div className="row gx-3 mb-3">
                                        {/* DIRECCIÓ */}
                                        <div className="col-md-6 mb-2">
                                            <label>Direcció:</label>
                                            <input value={this.state.direccio} type="text" name='direccio' onChange={this.onChange} className="form-control" />
                                        </div>
                                        {/* EMAIL */}
                                        <div className="col-md-6">
                                            <label>Email:</label>
                                            <input value={this.state.email} type="email" name='email' onChange={this.onChange} className="form-control" />
                                        </div>
                                    </div>
                                    {/* BOTÓ PER GUARDAR ELS CANVIS */}
                                    <div className='text-center'><button className="btn btn-primary" type="button" onClick={this.update}>Desa els canvis</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8" id='divPassword' style={{ display: 'none' }}>
                            {/* SECCIÓ CONTRASENYA */}
                            <div className="card mb-4">
                                <div className="card-header">Restableix la teva contrasenya</div>
                                <div className="card-body">
                                    <div className="row gx-3">
                                        {/* EMAIL */}
                                        <div className="col-md-6 mb-3">
                                            <label>Email:</label>
                                            <input value={this.state.email} type="email" name='email' onChange={this.onChange} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row gx-3">
                                        {/* CONTRASENYA ANTIGA ENCRIPTADA */}
                                        <div className="mb-3">
                                            <label>Contrasenya antiga (encriptada):</label>
                                            <input type="password" className='form-control' name='password_antiga' value={this.state.password} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        {/* CONTRASENYA NOVA */}
                                        <div className="col-md-6">
                                            <label>Contrasenya nova:</label>
                                            <input type="password" className='form-control' id='password_nova' name='password_nova' value={this.state.password_nova} onChange={this.onChange} />
                                        </div>
                                        <div className="col-md-6">
                                        {/* REPETIR CONTRASENYA */}
                                            <label>Repeteix contrasenya nova:</label>
                                            <input type="password" className='form-control' id='password_nova_re' name='password_nova_re' onChange={this.onChange} />
                                        </div>
                                    </div>
                                    {/* BOTÓ PER CANVIAR LA CONTRASENYA */}
                                    <div id='botoA'><button className="btn btn-primary" type="button" onClick={this.updatePassword}>Actualitza</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}