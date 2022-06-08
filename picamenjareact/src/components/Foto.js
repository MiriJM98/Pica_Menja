import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container } from "react-bootstrap";
import axios from 'axios';
import traduccions from "./traduccions.json";

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
            .get("https://picamenja.com/PicaMenja/public/api/fotos/" + id_foto, config)
            .then((response) => {
                //console.log(response);
                this.setState({
                    id_foto: response.data.id_foto,
                    id_restaurant: response.data.id_restaurant,
                    foto: response.data.foto,
                });
            })
            .catch(function (error) {
                // Mostrar error
                console.log(error);
            })
    }

    descarregafoto = (id_foto) => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        axios.get('https://picamenja.com/PicaMenja/public/api/fotos' + id_foto, config)
            .then(response => {
                // console.log(response);
                this.setState({
                    id_foto: response.data.id_foto,
                    foto: response.data.foto
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
        axios.get('https://picamenja.com/PicaMenja/public/api/idiomes', config)
            .then(response => {
                // console.log(response);
                this.setState({ idiomes: response.data });
            })
            .catch(function (error) {
                console.log("ERROR -> " + error.response.data.error);
            })
    }

    inserta = () => {
        // Modificar les dades a la api
        if (this.state.id_foto === "" || this.state.id_restaurant === "") {
            return alert(traduccions[sessionStorage.getItem("id_idioma")][0].errorCamps);
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
        axios.post('https://picamenja.com/PicaMenja/public/api/fotos', formData, config)
            .then(response => {
                // console.log(response);
                alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitInsert);
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
        // const config = {
        //     headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
        // };
        fetch("https://picamenja.com/PicaMenja/public/api/fotos/imatge/" + this.state.id_foto, { method: 'POST', headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") }, body: formData })
            .then((response => response.json()))
            .then(data => {
                // console.log(data);
                alert(traduccions[sessionStorage.getItem("id_idioma")][0].exitFoto);
                window.location.assign("/fotos");
                this.descarrega();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    onChangeFoto = (e) => {
        this.setState({
            foto: e.target.files[0]
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
                    <h1 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].missatgeFoto}</h1>
                </div>
                <div className="row mb-3">
                    <div className="col-md-1">
                        <div className="form-group"></div>
                        <input type="button" className="btn btn-secondary btn-lg" value={traduccions[sessionStorage.getItem("id_idioma")][0].botoTornar}
                            onClick={() => { window.location.assign("/fotos"); }} />
                    </div>
                </div>
                <hr />
                <h2 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].dades}</h2>
                <br />
                <div className='row'>
                    <div className="col-md-3">
                        <div className="form-group">
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].id_foto}:</label>
                            <input type="text" className="form-control" name="id_foto" value={this.state.id_foto} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].id_restaurant}:</label>
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
                            <label>{traduccions[sessionStorage.getItem("id_idioma")][0].foto}:</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, image/webP"
                                name="imatge"
                                onChange={this.onChangeFoto}
                                className="form-control"
                            />
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value={traduccions[sessionStorage.getItem("id_idioma")][0].botofoto}
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
                            {this.state.id_foto === "" ?
                                <input
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    value={traduccions[sessionStorage.getItem("id_idioma")][0].botoInsert}
                                    onClick={this.inserta} />
                                : console.log()}
                            <p></p>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        )
    }
}