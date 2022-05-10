import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from "react-bootstrap";
import axios from 'axios';

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
            administrador: "",
            foto_perfil: "",
        }
    }

    componentDidMount() {
        if (this.props.id_usuari !== -1) {
            this.descarrega(this.props.id_usuari);
        }
    }

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
                //Mostrar error
                console.log(error);
            })
    }

    update = () => {
        //Modificar les dades a la api
        let formData = new URLSearchParams();
        formData.append("nom_usuari", this.state.nom_usuari);
        formData.append("llinatges", this.state.llinatges);
        formData.append("email", this.state.email);
        formData.append("telefon", this.state.telefon);
        //formData.append("password", this.state.password);
        //Token
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token"),
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        const usuari = sessionStorage.getItem("id_usuari");
        axios.put('http://baleart.projectebaleart.com/public/api/usuaris/' + usuari, formData,
            config,
        ).then(response => {
            console.log(response);
            alert("Modificació feta amb èxit!");
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
                <h1 className="row justify-content-center mt-3 mb-3">El teu perfil</h1>
                <br />
                <div className='row'>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label>ID:</label>
                            <input type="text" className="form-control" value={this.state.id_usuari} readOnly />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Nom usuari:</label>
                            <input type="text" className='form-control' name='nom_usuari' value={this.state.nom_usuari} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Llinatges:</label>
                            <input type="text" className='form-control' name='llinatges' value={this.state.llinatges} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Telèfon:</label>
                            <input type="text" className='form-control' name='telefon' value={this.state.telefon} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Direcció:</label>
                            <input value={this.state.direccio} type="text" name='direccio' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Data naixement:</label>
                            <input value={this.state.data_naixement} type="date" name='data_naixement' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Email:</label>
                            <input value={this.state.email} type="email" name='email' onChange={this.onChange} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                <div className='row'>
                    <div className="col-md-3">
                        <Image src={this.state.foto_perfil} width="220" height="280" rounded />
                    </div>
                </div>
                <hr/>
                <div className='row justify-content-center'>
                    <div className="col-md-5">
                        <div className="form-group">
                            <h2>Restableix la teva contrasenya</h2>
                            <label>Password:</label>
                            <input type="password" className='form-control' name='password' value={this.state.password} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
                <div className="row"><div className="col-md-4">&nbsp;</div></div>
                <div className="row">
                    <div className="col-md-1 mb-2">
                        <div className="form-group">
                            <input type="submit" value="Modifica" className="btn btn-primary" onClick={this.update} />
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}