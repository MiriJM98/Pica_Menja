import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container } from "react-bootstrap";
import axios from 'axios';

export default class Foto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_foto: "",
            id_restaurant: "",
            foto: ""
        }
    }

    componentDidMount() {
        if (this.props.id_foto !== -1) {
            this.descarregaRestaurant(this.props.id_foto);
        }
    }

    descarregaRestaurant = (id_foto) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios
            .get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos/" + id_foto, config)
            .then((response) => {
                //console.log(response);
                this.setState({
                    id_foto: response.data.id_foto,
                    id_restaurant: response.data.id_restaurant,
                    foto: response.data.foto,
                });
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            })
    }

    descarregafoto = (id_foto) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            //headers: { Authorization: 'Bearer ' + "token"}
        };
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos' + id_foto, config)
            .then(response => {
                console.log(response);
                this.setState({
                    id_foto: response.data.id_foto,
                    foto: response.data.foto
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
                    //window.location.assign("/login");
                }
            })
    }

    inserta = () => {
        // Modificar les dades a la api
        if (this.state.id_foto === "" || this.state.id_restaurant === "") {
            return alert("Error. S'han d'omplir tots els camps.");
        }
        let formData = new URLSearchParams();
        formData.append("id_foto", this.state.id_foto);
        formData.append("id_restaurant", this.state.id_restaurant);
        // Token
        const config = {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem("token")
            }
        };
        axios.post('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos', formData, config)
            .then(response => {
                console.log(response);
                alert("Insertat amb èxit!");
                window.location.assign("/fotos");
                this.descarrega();
            }
            ).catch(error => {
                console.log(error);
            });
    }

    updateFoto = () => {
        let formData = new FormData();
        formData.append("foto", this.state.foto);
        // Token
        const config = {
            headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        };
        axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/fotos/imatge/" + this.state.id_foto, formData, config
        ).then((response) => {
            console.log(response);
            alert("Imatge pujada amb èxit!");
        }
        ).catch((error) => {
            console.log(error);
        });
    };

    onChangeFoto = (e) => {
        this.setState({
            imatge: e.target.files[0]
        })
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
                    <h1 className="row justify-content-center">Insertar una foto</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value="Tornar"
                            onClick={() => { window.location.assign("/fotos"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">Dades</h2>
                <br />
                <div className='row'>
                    <div className="col-md-3">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>ID foto:</label>
                            <input type="text" className="form-control" name="id_foto" value={this.state.id_foto} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>ID restaurant:</label>
                            <input type="text" className="form-control" name="id_restaurant" value={this.state.id_restaurant} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">&nbsp;</div>
                </div>
                <div className='row'>
                    <div className="col-md-3">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Image src={this.state.foto} width="240" height="170" rounded />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-5">
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

                <hr />
            </Container>
        )
    }
}